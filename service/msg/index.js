import { callApi } from '../../utils/https'

export const login = (data) => {
  return callApi({
    url: 'login',
    data,
    method: 'post'
  })
}
