import {
  axiosInstance
} from './api'

class Candidate {
  static async getCandidates(id) {
    const res = await axiosInstance.get(`/candidates?${new URLSearchParams({
      listURI: id
    })}`)
    const data = await res.data
    return data
  }

  static async getCandidate(id) {
    const res = await axiosInstance.get(`/person?${new URLSearchParams({
      personURI: id
    })}`)
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

export default Candidate