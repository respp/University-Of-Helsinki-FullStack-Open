import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/notificationReducer'


export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (e) =>{
        e.preventDefault()
        const content = e.target.anecdote.value
        // const createAnecdote = await anecdoteServices.createNew(content)
        // dispatch(newAnecdote(createAnecdote))
        dispatch(newAnecdote(content))
        e.target.anecdote.value = ''
        dispatch(showMessage(`The anecdote "${content}" was added`))
        setTimeout(()=>{
          dispatch(showMessage(null))
        }, 5000)
      }

  return (
    <div>
        <h2>create new</h2>
            <form onSubmit={addAnecdote}>
        <div><input name='anecdote' required/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}
