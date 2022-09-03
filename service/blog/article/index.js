import { callApi } from '../../../utils/https'

export const getArticleList = (params) => {
  return callApi({
    url: 'getArticleList',
    params,
    method: 'get'
  })
}
