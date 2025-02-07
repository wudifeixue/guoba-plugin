import {isV3, yunzaiVersion} from '../../utils/adapter.js'

const {_version} = await Guoba.GI('@/utils/common.js')
const Preload = await Guoba.GID('#/components/Preload.js')
const Constant = await Guoba.GID('#/constant/Constant.js')
import cfg from '../../utils/cfg.js'

export default class ConfigPreload extends Preload {
  constructor(app) {
    super(app, '_app.guoba.preload.js')
  }

  generateContent() {
    const content = [
      this.__YUNZAI_BOT_CONF__,
      this.__GUOBA_CONF__
    ]
    return `${content.join(';')}`;
  }

  get __YUNZAI_BOT_CONF__() {
    return `window["__YUNZAI_BOT_CONF__"] = ${JSON.stringify({
      VERSION: yunzaiVersion,
      GUOBA_VERSION: _version,
      API_PREFIX: isV3 ? '/v3' : '/v2',
      TOKEN_KEY: Constant.TOKEN_KEY,
    })}`
  }

  get __GUOBA_CONF__() {
    return `window["__GUOBA_CONF__"] = ${JSON.stringify({
      VERSION: _version,
      ICP_NO: cfg.get('server.ICPNo'),
    })}`
  }

}