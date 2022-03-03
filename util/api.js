import axios from 'axios'

const localBaseURL = 'http://localhost:4001'
const productionBaseURL = 'https://tahereh-back-end.vercel.app'
const baseURL = process.env.NODE_ENV.mode === 'Production' ? productionBaseURL : localBaseURL

export const photoBaseURL = baseURL + '/public/'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance