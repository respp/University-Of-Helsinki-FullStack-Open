import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { useReducer, useContext, createContext } from 'react'



const notificationReducer = (state, action) =>{
  switch(action.type){
    case 'SET_MESSAGE': {
      return action.payload
    }
    case 'NULL': return null
    default: return state
  }
}
const App = () => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null)
  

  const queryClient = useQueryClient()

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  })// console.log(JSON.parse(JSON.stringify(result)))

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updateAnecdote)=>{
      const anecdotes = queryClient.getQueryData(['anecdotes'])
        queryClient.setQueryData(['anecdotes'], anecdotes.map(anecdote => anecdote.id === updateAnecdote.id ? updateAnecdote : anecdote))
      // queryClient.invalidateQueries({ queryKey: ['anecdotes'] }) 
    }
  })
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes : anecdote.votes + 1 })
    notificationDispatch({type:'SET_MESSAGE', payload: `you voted "${anecdote.content}"`})
  }

  // console.log('RESULT IS ERROR: ', result.isError)
  if ( result.isLoading ) return <div>loading data...</div>

  if ( result.isError ) return <div>anecdote service not available due to problems in server</div>
  
  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification notification={notification} />
      <AnecdoteForm notificationDispatch={notificationDispatch}/>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
