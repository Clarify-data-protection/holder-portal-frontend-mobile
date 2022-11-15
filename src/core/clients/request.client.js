import HttpClient from '../http.client'

class RequestClient {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async findAll(filters) {
    const res = await this.httpClient.get('', filters)

    return res.data
  }

  async findOne(id) {
    const res = await this.httpClient.get(`/${id}`)

    return res.data
  }

  async createOne(payload) {
    return await this.httpClient.post('', payload)
  }
}

export default new RequestClient(new HttpClient('/requests'))
