import axios from 'axios'


// Default Axios Instance
export const axiosInstance = axios.create({
  //baseURL: 'https://my-training.herokuapp.com/api'
  baseURL: 'https://api.sep.osoc.be'
})

// export const setAuthorizationHeader = (mtToken) => {
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${mtToken}`
// }

