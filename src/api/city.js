import {
  axiosInstance
} from './api'

class City {
  static async getCities() {
    const res = await axiosInstance.get('/cities')
    const data = await res.data
    return data
  }
}

export default City