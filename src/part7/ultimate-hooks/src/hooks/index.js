import axios from 'axios'
import { useState, useEffect } from "react"

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
  }

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
    useEffect(()=>{
        axios
        .get(baseUrl)
        .then(res => setResources(res.data))
    }, [baseUrl])
  
    const create = async(resource) => {
        axios
        .post(baseUrl, resource)
        .then(res =>{
            const newObject = res.data
            console.log(newObject)
            // setResources({...resources, newObject})
            setResources(resources.concat(res.data))
        })
    }
  
    const service = {
      create
    }
  
    return [
      resources, service
    ]
  }