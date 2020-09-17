import axios from 'axios'

const instance = axios.create({
    baseURL: "https://us-central1-a-cd4eb.cloudfunctions.net/api",
     //'http://localhost:5001/a-cd4eb/us-central1/api/',
});

export default instance;