import { callApi } from '../../utils/https'

export const login = (data) => {
  callApi({
    url: 'login',
    data,
    method: 'post'
  })
}
