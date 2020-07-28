import {
  axiosInstance
} from './api'

class City {
  static async getCities() {
    const res = await axiosInstance.get('/cities')
    const data = await res.data
    return data
  }

  // static async getUserById(id) {
  //   const res = await axiosInstance.get(`/users/${id}`)
  //   const data = await res.data
  //   return data
  // }

  // static async createUser(body) {
  //   console.log(body)
  //   return axiosInstance.post(`/users`, body)
  // }

  // static async deleteUser(id) {
  //   return axiosInstance.delete(`/users/${id}`)
  // }
}

export default City