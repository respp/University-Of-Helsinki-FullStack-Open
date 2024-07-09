import { AnecdoteList } from './components/AnecdoteList'
import { AnecdoteForm } from './components/AnecdoteForm'
import { Filter } from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    // anecdoteService.getAll().then(anecdote=>
    //   dispatch(setAnecdotes(anecdote))
    // )
    dispatch(initializeAnecdotes())
  }, [dispatch]) //Lo puse por una advertencia de ESLint


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App