import request from '@/utils/request'
// import ActionheroWebsocketClient from '@/utils/ActionheroWebsocketClient'

export function loginByUsername(username, password) {
  /* var options = { url: window.webstreamer.apiUrl }
  var client = new window.ActionheroWebsocketClient(options)
  return new Promise((resolve, reject) => {
    client.action('login', { httpMethod: 'GET' }, function(data) {
      if (data.error) {
        reject(data.error)
      } else {
        resolve({ data: { token: 'admin' }})
      }
    })
  })
  */
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

