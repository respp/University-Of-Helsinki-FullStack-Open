// import axios from 'axios'

// axios
// .get('http://localhost:3001/notes')
// .then( response => {
//   const notes = response.data
//   console.log(notes)
// })
  

// const promise2 = axios.get('http://localhost:3001/foobar')

// promise2.then( res => {
//   console.log(res)
// })

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
