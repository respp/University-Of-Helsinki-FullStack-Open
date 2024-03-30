import React from 'react'

export const DisplayAllAnecdotes = ({anecdotes}) => {
    
    function displayAll(){
        const list = anecdotes.map(anecdote => (
            <li key={anecdote}>{anecdote}</li>
        ))
        return list
    }
    return(
        <ul>{displayAll()}</ul>
    )
}
