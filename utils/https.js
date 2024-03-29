// src/utils/https.js
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
import { debounce } from './debounce'
import { message as Message } from 'antd'
import Router from 'next/router'

const contentTypes = {
  json: 'application/json; charset=utf-8',
  urlencoded: 'application/x-www-form-urlencoded; charset=utf-8',
  multipart: 'multipart/form-data'
}

//const rootUrl = 'http://123.249.102.202:8443'
const rootUrl = 'http://localhost:8443'

function toastMsg() {
  Object.keys(errorMsgObj).map((item) => {
    Message.error(item)
    delete errorMsgObj[item]
  })
}

let errorMsgObj = {}

const defaultOptions = {
  withCredentials: true, // true 允许跨域请求把cookie传递到后台
  headers: {
    Accept: 'application/json',
    'Content-Type': contentTypes.json
    // 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
  },
  timeout: 15000
}

export const callApi = ({
  url,
  data = {},
  params = {},
  method = 'get',
  options = {},
  contentType = 'json', // json || urlencoded || multipart
  prefixUrl = 'api'
}) => {
  if (!url) {
    const error = new Error('请传入url')
    return Promise.reject(error)
  }
  const fullUrl = `${rootUrl}/${prefixUrl}/${url}`

  const newOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      'Content-Type':
        (options.headers && options.headers['Content-Type']) ||
        contentTypes[contentType]
    },
    method
  }

  if (Cookies.get('token')) {
    newOptions.headers.Authentication = Cookies.get('token')
  }

  if (method === 'get') {
    newOptions.params = params
  }

  if (method !== 'get' && method !== 'head') {
    newOptions.data = data
    if (data instanceof FormData) {
      newOptions.headers = {
        'x-requested-with': 'XMLHttpRequest',
        'cache-control': 'no-cache'
      }
    } else if (newOptions.headers['Content-Type'] === contentTypes.urlencoded) {
      newOptions.data = qs.stringify(data)
    } else {
      Object.keys(data).forEach((item) => {
        if (
          data[item] === null ||
          data[item] === undefined ||
          data[item] === ''
        ) {
          delete data[item]
        }
      })
      // 没有必要，因为axios会将JavaScript对象序列化为JSON
      // newOptions.data = JSON.stringify(data);
    }
  }

  axios.interceptors.request.use((request) => {
    // 移除起始部分 / 所有请求url走相对路径
    request.url = request.url.replace(/^\//, '')
    return request
  })

  return axios({
    url: fullUrl,
    ...newOptions
  })
    .then((response) => {
      console.log(response, '-')
      const { data } = response
      console.log(data, 'data')
      if (data.code === 200) {
        return Promise.resolve(data)
        // 与服务端约定
        // 登录校验失败
      } else if (data.code === 'xxx') {
        // 与服务端约定
        // 无权限
        router.replace({ path: '/403' })
      } else if (data.code === 'xxx') {
        // 与服务端约定
        return Promise.resolve(data)
      } else {
        const { errorMsg } = data
        if (!errorMsgObj[errorMsg]) {
          errorMsgObj[errorMsg] = errorMsg
        }
        setTimeout(debounce(toastMsg, 1000, true), 1000)
        return Promise.reject(data)
      }
    })
    .catch((error) => {
      console.log(error, 'catch')
      // Message.error('服务器错误')
      if (error.response) {
        const { data } = error.response
        const resCode = data.code
        const resMsg = data.errorMsg || '服务异常'
        if (resCode === '401') {
          // 与服务端约定
          // 登录校验失败
          Message.error(resMsg)
          Cookies.remove('token')
          Router.push('/')
        } else if (data.code === 403) {
          // 与服务端约定
          // 无权限
          // Router.replace({ path: '/403' })
        }
        if (!errorMsgObj[resMsg]) {
          errorMsgObj[resMsg] = resMsg
        }
        setTimeout(debounce(toastMsg, 1000, true), 1000)
        // const err = { code: resCode, respMsg: resMsg }
        // return Promise.reject(err)
      }
    })
}
