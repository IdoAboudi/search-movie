import axios from 'axios'

export default axios.create({
    baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=1d43780a'
})