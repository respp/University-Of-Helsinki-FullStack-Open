import ReactDOM from 'react-dom/client'
// import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './components/store'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

// const store = configureStore(reducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)