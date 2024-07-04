import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  
  const vote = id =>  dispatch(voteAnecdote(id))

  return (
    <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id} className='anecdote'>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
    </div>
  )
}
