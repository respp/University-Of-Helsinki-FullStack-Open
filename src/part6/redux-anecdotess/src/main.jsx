import ReactDOM from 'react-dom/client'
// import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import App from './App'
import './index.css'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer)
console.log(store.getState())

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div />
  </Provider>
)