import os from 'os'
import fs from 'fs'
import path from 'path'
import lodash from 'lodash'
import fetch from 'node-fetch'
import cfg from './cfg.js'
import {pluginPackage} from './package.js'
import {_paths} from './paths.js'
import common from '../../../lib/common/common.js'
import BotCfg from '../../../lib/config/config.js'
import Constant from '../server/constant/Constant.js'

export const _version = pluginPackage.version

export {
  _paths,
}

export const GuobaSupportMap = new Map()
export const PluginsMap = new Map()

/**
 * 引入 class 资源
 * @param rootPath
 * @param clazz 筛选类
 * @param classes
 */
export async function loadClasses(rootPath, clazz, classes = {}) {
  let files = readdirRecursiveSync(rootPath, file => /\.c?js$/.test(file))
  for (let filePath of files) {
    try {
      let app = await import('file://' + filePath + '?' + Date.now())
      // 可一次性导入多个类
      for (const [key, value] of Object.entries(app)) {
        if (instanceOf(value, clazz)) {
          let name = key
          if (name === 'default' && value?.name) {
            name = value.name
          }
          classes[name] = value
        }
      }
    } catch (e) {
      logger.error(`[Guoba] loadClasses error: ${logger.red(path.basename(filePath))}`, e)
    }
  }
  return classes
}

/**
 * 获取某个目录下的所有文件（返回的是绝对路径）
 *
 * @param rootPath
 * @param filter 文件名过滤器
 */
export function readdirRecursiveSync(rootPath, filter = () => true) {
  let files = fs.readdirSync(rootPath)
  let ret = []
  for (let file of files) {
    let filePath = path.join(rootPath, file)
    let stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      ret = ret.concat(readdirRecursiveSync(filePath))
    } else if (filter(file)) {
      ret.push(filePath)
    }
  }
  return ret
}

/**
 * 判断是否是某个类的实例或继承类
 *
 * @param obj
 * @param clazz
 */
export function instanceOf(obj, clazz) {
  if (obj instanceof clazz) {
    return true
  } else if (obj?.prototype) {
    return instanceOf(obj.prototype, clazz)
  }
  return false
}

/**
 * 随机生成指定长度的字符串
 * @param length
 * @return {string}
 */
export function randomString(length = 8) {
  let str = ''
  for (let i = 0; i < length; i++) {
    str += lodash.random(36).toString(36)
  }
  return str.substr(0, length)
}

export function toPairsMap(arg) {
  let obj = {}
  let pairs = lodash.toPairs(arg)
  for (let [key, value] of pairs) {
    obj[key] = value
  }
  return obj
}

/**
 * 给主人发送消息
 * @param msg 消息内容
 * @param all 是否发送给所有主人，默认false
 * @param idx 不发送给所有主人时，指定发送给第几个主人，默认发送给第一个主人
 */
export async function sendToMaster(msg, all = false, idx = 0) {
  let masterQQ = BotCfg.masterQQ
  let sendTo = all ? masterQQ : [masterQQ[idx]]
  for (let qq of sendTo) {
    await common.relpyPrivate(qq, msg)
  }
}

/**
 * 获取所有web地址，包括内网、外网
 */
export async function getAllWebAddress() {
  let host = cfg.getServerHost()
  let {port, splicePort} = cfg.get('server')
  port = splicePort ? Number.parseInt(port) : null
  port = port === 80 ? null : port
  let custom = []
  let local = getAutoIps(port, true)
  let remote = await getRemoteIps(port)
  if (host) {
    if (!Array.isArray(host)) {
      host = [host]
    }
    for (let h of host) {
      if (h && h !== 'auto') {
        h = /^http/.test(h) ? h : 'http://' + h
        custom.push(`${h}${port ? ':' + port : ''}`)
      }
    }
  }
  return {custom, local, remote}
}

/**
 * 获取web地址
 * @param allIp 是否展示全部IP
 */
export function getWebAddress(allIp = false) {
  let host = cfg.getServerHost()
  let {port, splicePort} = cfg.get('server')
  port = splicePort ? Number.parseInt(port) : null
  port = port === 80 ? null : port
  let hosts = []
  if (host === 'auto') {
    hosts.push(...getAutoIps(port, allIp))
  } else {
    if (!Array.isArray(host)) {
      host = [host]
    }
    for (let item of host) {
      if (item === 'auto') {
        hosts.push(...getAutoIps(port, allIp))
      } else {
        item = /^http/.test(item) ? item : 'http://' + item
        hosts.push(`${item}${port ? ':' + port : ''}`)
      }
    }
  }
  return hosts
}

function getAutoIps(port, allIp) {
  let ips = getLocalIps(port)
  if (ips.length === 0) {
    ips.push(`localhost${port ? ':' + port : ''}`)
  }
  if (allIp) {
    return ips.map(ip => `http://${ip}`)
  } else {
    return [`http://${ips[0]}`]
  }
}

/**
 * 获取本地ip地址
 * 感谢 @吃吃吃个柚子皮
 * https://gitee.com/guoba-yunzai/guoba-plugin/pulls/2
 * @param port 要拼接的端口号
 * @return {*[]}
 */
export function getLocalIps(port) {
  let networks = os.networkInterfaces()
  let ips = []
  // noinspection EqualityComparisonWithCoercionJS
  port = port ? `:${port}` : ''
  for (let [name, wlans] of Object.entries(networks)) {
    for (let wlan of wlans) {
      /**
       * 更改过滤规则,填坑。(之前未测试Windows系统)
       * 通过掩码过滤本地IPv6
       * 通过MAC地址过滤Windows 本地回环地址（踩坑）
       * 过滤lo回环网卡（Linux要过滤'lo'），去掉会导致Linxu"::1"过滤失败（踩坑）
       * 如有虚拟网卡需自己加上过滤--技术有限
       */
      if ((wlan.netmask !== 'ffff:ffff:ffff:ffff::') && (wlan.mac !== '00:00:00:00:00:00') && (name !== 'docker0' && name !== 'lo')) {
        if (wlan.family === 'IPv6') {
          ips.push(`[${wlan.address}]${port}`)
        } else {
          ips.push(`${wlan.address}${port}`)
        }
      }
    }
  }
  return ips
}

/**
 * 获取外网ip地址
 * @author @吃吃吃个柚子皮
 */
export async function getRemoteIps(port) {
  let redisKey = Constant.REDIS_PREFIX + 'remote-ips:3'
  let cacheData = await redis.get(redisKey)
  let ips
  if (cacheData) {
    ips = JSON.parse(cacheData)
  } else {
    ips = []
    //API是免费，但不能商用。(废话)
    let apis = [
      // 返回IPv4地址
      'http://v4.ip.zxinc.org/info.php?type=json',
      // 返回IPv6地址（已失效）
      // 'http://v6.ip.zxinc.org/info.php?type=json'
    ]
    for (let api of apis) {
      let response = await fetch(api)
      if (response.status === 200) {
        let {code, data} = await response.json()
        if (code === 0) {
          ips.push(data.myip)
        }
      }
    }
    // 缓存避免过多请求，防止接口提供商检测
    // 服务器上的外网IP一般不会变，如果经常变的话就推荐使用DDNS，
    // 而家用PC一般也用不到外网IP，仍然推荐使用DDNS内网穿透。
    redis.set(redisKey, JSON.stringify(ips), {EX: 3600 * 24})
  }
  port = port ? `:${port}` : ''
  return ips.map(ip => `http://${ip}${port}`)
}

export function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 读取JSON文件
 * @param filePath
 */
export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

/**
 *
 * 制作转发消息
 * @param e
 * @param msg 消息体
 * @param dec 描述
 * @returns {Promise<boolean|*>}
 */
export async function makeForwardMsg(e, msg = [], dec = '') {
  let nickname = Bot.nickname
  if (e.isGroup) {
    let info = await Bot.getGroupMemberInfo(e.group_id, Bot.uin)
    nickname = info.card || info.nickname
  }
  let userInfo = {
    user_id: Bot.uin,
    nickname,
  }

  let forwardMsg = []
  msg.forEach(v => {
    forwardMsg.push({
      ...userInfo,
      message: v,
    })
  })

  /** 制作转发内容 */
  if (e.isGroup) {
    forwardMsg = await e.group.makeForwardMsg(forwardMsg)
  } else if (e.friend) {
    forwardMsg = await e.friend.makeForwardMsg(forwardMsg)
  } else {
    return false
  }

  if (dec) {
    /** 处理描述 */
    forwardMsg.data = forwardMsg.data
      .replace(/\n/g, '')
      .replace(/<title color="#777777" size="26">(.+?)<\/title>/g, '___')
      .replace(/___+/, `<title color="#777777" size="26">${dec}</title>`)
  }

  return forwardMsg
}
