import {
  wxRequest
} from '../utils/wxRequest'
import DevConfig from '../config/dev'

// let env = '-test' // -dev 或者 -test
const BASE_URL_FOR_DEV = DevConfig.BASE_URL

const apiMall = BASE_URL_FOR_DEV
// const apiMall = 'https://api.tangxinmao.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {Promise<*>}        [description]
 */
// 查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/ad-list-in-homepage/')
const getMostRecentTicketList = (params) => wxRequest(params, apiMall + '/most-recent-tickets/')
// const getAdList = (params) => wxRequest(params, 'http://localhost:8000/bplur/api/v1/ad-list-in-homepage/')

module.exports = {
  getAdList,
  getMostRecentTicketList
}
