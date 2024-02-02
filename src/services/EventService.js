import axios from 'axios'

// making instance axios
const apiClient = axios.create({
  // add baseURL for axios
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  // define credentials
  withCredentials: false,
  // request header using JSON
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// export when this Service has been imported
export default {
  // function have 2 params
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  // just lookin for parameter and pass it to axios baseURL
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
