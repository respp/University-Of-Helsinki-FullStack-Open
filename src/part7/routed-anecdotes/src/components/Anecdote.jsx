import {useParams} from 'react-router-dom'

export const Anecdote = ({ anecdoteById })=> {
    const id = useParams().id
    const anecdote = anecdoteById(id)// anecdotes.find(a => a.id === Number(id))

    console.log('ANECDOTE ID: ',anecdote)
    return(
      <div key={anecdote.id}>
        <h4>{anecdote.author}</h4>
          <p> {anecdote.content} </p>
      </div>
    )
  }