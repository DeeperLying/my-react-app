import { callApi } from '../../../utils/https'

export const saveArticleList = (data) => {
  return callApi({
    url: 'saveArticleList',
    data,
    method: 'post'
  })
}

export const saveArticle = (data) => {
  return callApi({
    url: 'saveArticle',
    data,
    method: 'post'
  })
}
