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
}

export default Candidate