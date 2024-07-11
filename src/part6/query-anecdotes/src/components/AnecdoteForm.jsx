import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import PropTypes from 'prop-types';

const AnecdoteForm = ({ notificationDispatch }) => {
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation({
      mutationFn: createAnecdote, 
      onSuccess: (newAnecdote)=>{ //newAnecdote viene de createAnecdote en requests.js
        const anecdotes = queryClient.getQueryData(['anecdotes'])
        queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      }, //invalidando el antiguo query
      onError: ()=>{
        notificationDispatch({type: 'SET_MESSAGE', payload: 'too short anecdote, must have length 5 or more'})
        setTimeout(()=>
          notificationDispatch({type: 'NULL'}),5000
        )
      }
    })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes : 0 })
    notificationDispatch({type:'SET_MESSAGE', payload:`The anecdote "${content}" was created`})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

AnecdoteForm.propTypes = {
  notificationDispatch: PropTypes.func.isRequired,
};

export default AnecdoteForm
