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
    }, this.handleError)
  }

  getSalarieById (id) {
    return axios.get(`${apiUrl}/salaries?filter={"where":{"userId":"${id}"}}&access_token=${token}`).then(function (resp) {
      return resp.data
    }, this.handleError)
  }

  getSalarieContract (id) {

  }

  getSalarieEvent (id, startDate, endDate) {
    return null
  }

  updateSalarie (salarie) {
    return axios.patch(`${apiUrl}/salaries?access_token=${token}`, salarie).then(function (resp) {
      return resp.data
    }, this.handleError)
  }

  loginUser (email, password) {
    return axios.post(`${apiUrl}/Users/login`, { 'email': email, 'password': password }).then(function (resp) {
      token = resp.data.id
      sessionStorage.setItem('gta-token', token)
      return resp.data
    }, this.handleError)
  }

  logoutUser () {
    return axios.post(`${apiUrl}/Users/logout?access_token=${token}`).then(function (resp) {
      if (sessionStorage.getItem('gta-token') != null) {
        sessionStorage.removeItem('gta-token')
        token = null
      }
      return resp.data
    }, this.handleError)
  }

  handleError (e) {
    let errMessage = null
    if (e != null && e.message != null && e.message.includes('401')) {
      errMessage = 'Veuillez vous connecter.'
    } else {
      errMessage = 'Une erreur est survenue. Veuillez contacter un administrateur'
    }
    return Promise.reject(errMessage)
  }
}
