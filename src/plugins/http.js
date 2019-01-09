import axios from 'axios'
const Http = {}
Http.install = function (vue) {
  axios.defaults.baseURL = "http://localhost:8888/api/private/v1/"
  vue.prototype.$http = axios
}
export default Http
