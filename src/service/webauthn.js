import axios from 'axios'

axios.defaults.withCredentials = true

function getMakeCredentialsChallenge(formBody) {
  return axios.post('http://localhost:8080/webauthn/register', formBody).then(response => {
    if (response.data.status !== 'ok')
      throw new Error(`Server responed with error. The message is: ${response.message}`)

    return response.data
  })
}

function sendRegisterResponse(body) {
  return axios.post('http://localhost:8080/webauthn/verify-register', body).then(response => {
    if (response.data.status !== 'ok')
      throw new Error(`Server responed with error. The message is: ${response.data.message}`)

    return response.data
  })
}

function sendAuthResponse(body) {
  return axios.post('http://localhost:8080/webauthn/verify-authencations', body).then(response => {
    if (response.data.status !== 'ok')
      throw new Error(`Server responed with error. The message is: ${response.data.message}`)

    return response.data
  })
}

function getGetAssertionChallenge(formBody) {
  return axios.post('http://localhost:8080/webauthn/login', formBody).then(response => {
    if (response.data.status !== 'ok')
      throw new Error(`Server responed with error. The message is: ${response.message}`)

    return response.data
  })
}

function getProfile() {
  return axios.get('http://localhost:8080/webauthn/profile').then(response => response.data)
}

function logout() {
  return axios.get('http://localhost:8080/webauthn/profile').then(response => response.data)
}

function registerFail(body) {
  return axios.post('http://localhost:8080/webauthn/registerfail', body).then(response => response.data)
}

function sendOTP(body) {
  console.log(body)

  return axios.post('http://localhost:8080/webauthn/send-otp', body).then(response => response.data)
}

function confirmOTP(body) {
  console.log(body)

  return axios.post('http://localhost:8080/webauthn/confirm-otp', body).then(response => response.data)
}

export {
  getGetAssertionChallenge,
  getMakeCredentialsChallenge,
  sendRegisterResponse,
  sendAuthResponse,
  getProfile,
  logout,
  registerFail,
  sendOTP,
  confirmOTP
}
