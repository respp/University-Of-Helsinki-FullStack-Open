import { useState } from 'react'
import { DisplayAnecdotes } from './DisplayAnecdotes'
import { DisplayWinner } from './DisplayWinner'
import { DisplayAllAnecdotes } from './DisplayAllAnecdotes' // Por si quiero mostrar jugadores

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })

  const [selected, setSelected] = useState(-1)

  const handleRandom =()=>{
      setSelected(Math.floor(Math.random() * 7))
  }

  const handleVote = ()=>{
    let el
    const index = anecdotes.findIndex(el => el === anecdotes[selected])
    el = index
    const copy = {...votes}
    copy[el] += 1 
    setVotes(copy)
  }

  const findAnecdoteWinner = () => {
    let maxValue = 0;
    let anecdoteWithMostVotes = '';
    
    for (let id in votes) {
      if (votes[id] > maxValue) {
        maxValue = votes[id];
        console.log(maxValue)
        anecdoteWithMostVotes = anecdotes[id];
      }
    }

    return {winner: anecdoteWithMostVotes, votesForWinner: maxValue};
  }

  const {winner, votesForWinner} = findAnecdoteWinner();
  
    
  return (
    <>
    <DisplayAnecdotes anecdotes={anecdotes} selected={selected}/>
    <button onClick={handleRandom}>next anecdote</button>
    <button onClick={handleVote}>vote</button> 
    {/* <DisplayAllAnecdotes anecdotes={anecdotes} /> Si quiero mostrar ganadores */}
    <DisplayWinner winnerId={winner} votesForWinner={votesForWinner}/>

    </>
  )
}

export default App