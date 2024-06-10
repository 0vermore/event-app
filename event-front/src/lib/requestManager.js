import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default {
	get: (path, params) => axios.get(`${path}`, { params: params }),
	post: (path, params) => axios.post(`${path}`, params),
	put: (path, params) => axios.put(`${path}`, params),
	delete: (path, params) => axios.delete(`${path}`, params),
}
