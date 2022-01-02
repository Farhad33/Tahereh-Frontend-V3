import axios from 'axios'

export const baseURL = 'http://localhost:4001'

const instance =  axios.create({
    baseURL,
    timeout: 2000
})

instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance