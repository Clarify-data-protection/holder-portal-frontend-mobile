import axios from 'axios'

export default class HttpClient {
  constructor(basePath = '') {
    this.request = axios.create({
      baseURL: process.env.VUE_APP_API_URL + basePath
    })
  }

  async get(path, query = {}) {
    const params = Object.entries(query).reduce(
      (prev, [key, val]) => (val ? Object.assign({ [key]: val }, prev) : prev),
      {}
    )

    return await this.request.get(path, { params })
  }

  async put(path, payload) {
    return await this.request.put(path, payload)
  }

  async post(path, payload) {
    return await this.request.post(path, payload)
  }

  async patch(path) {
    return await this.request.patch(path)
  }

  async delete(path) {
    return await this.request.delete(path)
  }
}
