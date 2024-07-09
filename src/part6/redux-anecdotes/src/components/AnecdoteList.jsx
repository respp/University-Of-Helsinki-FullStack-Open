import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/notificationReducer'


export const AnecdoteList = () => {
  const dispatch = useDispatch()
  //Antes devolvia el estado completo q eran las anecdotas, ahora al estar el filter d manera combinada hay q seleccionar
  const anecdotes = useSelector(state =>
      [...state.anecdotes]
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
        )
        .sort((a,b) =>
          b.votes - a.votes
        )
    )
  
  const vote = id =>{
    dispatch(voteAnecdote(id))
    let anecdoteVoted = anecdotes.find(anecdote => anecdote.id == id).content
    console.log(anecdoteVoted)
    dispatch(showMessage(`The anecdote "${anecdoteVoted}" was voted`))
        setTimeout(()=>{
          dispatch(showMessage(null))
        }, 5000)
  } 

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
