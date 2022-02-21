import axios from 'axios'

const baseURL = 'http://localhost:4001'

export const photoBaseURL = baseURL + '/public/'

const instance =  axios.create({
    baseURL,
    timeout: 5000
})

instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance