import {
    BrowserRouter as Link
  } from 'react-router-dom'


export const AnecdoteList = ({ anecdotes }) => {
    console.log('ANECDOTES: ',anecdotes)
    return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => 
        <li key={anecdote.id} to={`/anecdotes/${anecdote.id}`} >
          {/* <Link to={`/anecdotes/${anecdote.id}`}> {anecdote.content} </Link> */}
          {anecdote.content}
        </li>)}
      </ul>
    </div>
  )}