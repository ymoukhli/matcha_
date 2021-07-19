import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3001/api'});

export const creatUser = user => api.post('/signup', user);

const apis = {
    creatUser,
}

export default apis;