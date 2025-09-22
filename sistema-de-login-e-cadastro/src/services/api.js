import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-http.vercel.app'
})

export default api