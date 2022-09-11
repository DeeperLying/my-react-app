import { callApi } from 'utils/https'

export const upLoad = (data: any) => {
  return callApi({
    options: { 'Content-Type': 'multipart/form-data' },
    url: 'upLoad',
    data,
    method: 'post'
  })
}
