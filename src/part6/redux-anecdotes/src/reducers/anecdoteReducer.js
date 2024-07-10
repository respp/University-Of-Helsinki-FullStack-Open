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
    voteTo(state, action){
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.payload)
      const votedAnecdote = { 
        ...anecdoteToVote, 
        votes: anecdoteToVote.votes + 1 
      }
      return state.map(anecdote =>
        anecdote.id !== action.payload ? anecdote : votedAnecdote
      ).sort((a,b) => b.votes-a.votes)
    },
    appendAnecdote (state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

//***************** REDUX THUNK ******************/

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

export const voteAnecdote = anecdote => {
  return async (dispatch) =>{
    const anecdoteUpdated = await anecdoteServices.update(anecdote.id, {...anecdote,votes: anecdote.votes + 1 })
    dispatch(voteTo(anecdoteUpdated.id))
  }
}

// Export the actions
export const { appendAnecdote, setAnecdotes, voteTo } = anecdoteSlice.actions

// Export the reducer
export default anecdoteSlice.reducer