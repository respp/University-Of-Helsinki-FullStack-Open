import { AnecdoteList } from './components/AnecdoteList'
import { AnecdoteForm } from './components/AnecdoteForm'

const App = () => {


//hola
  return (
    <div>
      <h2>Anecdotes</h2>
      
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App