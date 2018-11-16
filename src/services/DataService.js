import Config from '../../config'
import axios from 'axios'

let apiUrl = Config.apiUrl
let token = null

if (sessionStorage.getItem('gta-token') != null) {
  token = sessionStorage.getItem('gta-token')
}

export default class DataService {
  getSalarieByEmail (email) {
    return axios.get(`${apiUrl}/salaries?filter={"where":{"email":"${email}"}}&access_token=${token}`).then(function (resp) {
      return resp.data
    }).catch(function (err) {
      throw err
    })
  }

  getSalarieById (id) {
    return axios.get(`${apiUrl}/salaries?filter={"where":{"userId":"${id}"}}&access_token=${token}`).then(function (resp) {
      return resp.data
    }).catch(function (err) {
      throw err
    })
  }

  getSalarieContract (id) {

  }

  getSalarieEvent (id, startDate, endDate) {
    return null
  }

  updateSalarieById (salarie) {
    return axios.patch(`${apiUrl}/salaries?access_token=${token}`, salarie).then(function (resp) {
      return resp.data
    }).catch(function (err) {
      throw err
    })
  }

  loginUser (email, password) {
    return axios.post(`${apiUrl}/Users/login`, { 'email': email, 'password': password }).then(function (resp) {
      token = resp.data.id
      sessionStorage.setItem('gta-token', token)
      return resp.data
    }).catch(function (err) {
      throw err
    })
  }

  logoutUser () {
    return axios.post(`${apiUrl}/Users/logout?access_token=${token}`).then(function (resp) {
      if (sessionStorage.getItem('gta-token') != null) {
        sessionStorage.removeItem('gta-token')
        token = null
      }
      return resp.data
    }).catch(function (err) {
      throw err
    })
  }
}
