import axios from 'axios'

// https://seurole-api.onrender.com

const API = axios.create({
  baseURL: 'https://seurole-api.onrender.com'
})

export default API
