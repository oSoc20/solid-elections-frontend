import {
  axiosInstance
} from './api'

class Party {
  static async getParties(id) {
    //id example: http%3A%2F%2Fdata.lblod.info%2Fid%2Fwerkingsgebieden%2F39173049fa95c468999d3862c3e6d22184c604d0864d6e56d1660886e17ca3c7
    const res = await axiosInstance.get(`/lists?${new URLSearchParams({
      cityURI: id
    })}`)
    const data = await res.data
    return data
  }
}

export default Party