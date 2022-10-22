import { callApi } from 'utils/https'

export const sendEmail = (params) => {
  return callApi({
    url: 'sendEmail',
    params,
    method: 'get'
  })
}

export const register = (data) => {
  return callApi({
    url: 'register',
    data,
    method: 'post'
  })
}

export const login = (data) => {
  return callApi({
    url: 'login',
    data,
    method: 'post'
  })
}
