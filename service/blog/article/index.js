import { callApi } from '../../../utils/https'

export const getArticleList = (params) => {
  return callApi({
    url: 'getArticleList',
    params,
    method: 'get'
  })
}

export const getArticle = (params) => {
  return callApi({
    url: 'getArticle',
    params,
    method: 'get'
  })
}
