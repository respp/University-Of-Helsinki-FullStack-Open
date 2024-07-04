import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = e =>{
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(newAnecdote(content))
      }

  return (
    <div>
        <h2>create new</h2>
            <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}
