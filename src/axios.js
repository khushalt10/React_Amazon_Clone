import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/a-cd4eb/us-central1/api/',
});

export default instance;