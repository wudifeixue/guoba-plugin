import fs from 'fs'
import path from 'path'
import lodash from 'lodash'
import {_paths} from '../../../utils/paths.js'

const Result = await Guoba.GID('#/components/Result.js')
const {autowired} = await Guoba.GI('#/loader/injection.js')
const RestController = await Guoba.GID('#/components/RestController.js')
const Constant = await Guoba.GID('#/constant/Constant.js')

/**
 * 首页相关查询
 */
export class HomeController extends RestController {

  botService = autowired('botService')
  oicqService = autowired('oicqService')

  constructor(app) {
    super('/home', app)
  }

  registerRouters() {
    this.get('/data', this.getHomeData)
    this.get('/random-image', this.randomImage)
  }

  /** 获取首页数据 */
  async getHomeData() {
    return Result.ok({
      cookieCount: await this.botService.getCookieCount(),
      friendCount: await this.oicqService.getFriendCount(),
      groupCount: await this.oicqService.getGroupCount(),
    })
  }

  // 随机角色图片
  randomImage(req, res) {
    let imgPath = this.getRandomRoleImage()
    if (imgPath != null) {
      res.sendFile(imgPath)
    } else {
      res.sendFile(path.join(_paths.pluginResources, 'images/no-miao.png'))
    }
    return Constant.VOID
  }

  // 安装了喵喵插件后，获取随机角色图片
  getRandomRoleImage() {
    if (!this.dirPaths) {
      let miaoPath = path.join(_paths.root, 'plugins', 'miao-plugin')
      this.dirPaths = [
        path.join(miaoPath, 'resources/character-img'),
        path.join(miaoPath, 'resources/miao-res-plus/character-img'),
      ]
      this.dirPaths = this.dirPaths.filter(p => fs.existsSync(p))
    }
    if (this.dirPaths.length === 0) {
      return null
    }
    let dirPath = lodash.sample(this.dirPaths)
    let rolePaths = []
    fs.readdirSync(dirPath).forEach(p => rolePaths.push(path.join(dirPath, p)))
    if (rolePaths.length === 0) {
      return null
    }
    let rolePath = null
    let picPaths = []
    for (let i = 0; i < 10; i++) {
      rolePath = lodash.sample(rolePaths)
      if (fs.statSync(rolePath).isDirectory()) {
        picPaths = []
        fs.readdirSync(rolePath).filter((p) => /\.(jpg|png|jpeg|webp)$/i.test(p)).forEach(p => picPaths.push(path.join(rolePath, p)))
        // 好可怜，居然一张图片都没有，最多尝试10次
        if (picPaths.length > 0) {
          break
        }
      } else {
        rolePath = null
      }
    }
    if (picPaths.length === 0) {
      return null
    }
    return lodash.sample(picPaths)
  }

}
