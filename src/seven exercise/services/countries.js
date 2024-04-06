import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = ()=>{
    return axios.get(baseUrl)
}

const create = contactObject => {
    return axios.post(baseUrl, contactObject)
}

const del = id =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id,number) => {
    return axios.put(`${baseUrl}/${id}`, number)
}

export default {getAll, create, del, update}