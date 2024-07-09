import { createSlice } from "@reduxjs/toolkit"
import anecdoteServices from '../services/anecdotes'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject).sort((a,b) => b.votes-a.votes)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    voteAnecdote(state, action){
      const id = action.payload
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
    //   console.log(current(anecdoteToVote))
    //   console.log('STATE: ',current(state))
      const votedAnecdote = { 
        ...anecdoteToVote, 
        votes: anecdoteToVote.votes + 1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      ).sort((a,b) => b.votes-a.votes)
    },
    // newAnecdote(state, action){
    //     console.log(current(state))
    //     state.push(action.payload)
    //     //state.sort((a,b) => b.votes-a.votes)
    // }, 
    appendAnecdote (state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})


export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteServices.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const newAnecdote = content => {
  return async (dispatch) =>{
    const createAnecdote = await anecdoteServices.createNew(content)
    dispatch(appendAnecdote(createAnecdote))
  }
}

// Export the actions
export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

// Export the reducer
export default anecdoteSlice.reducer