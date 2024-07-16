import { Menu } from './Menu'
import { Footer } from './Footer'

const App = () => {

  return (
    <div>
    {/* <Router>
        <div>
          <Link style={padding} to="/">anecdotes</Link>
          <Link style={padding} to="/create">create new</Link>
          <Link style={padding} to="/about">about</Link>
        </div>

        <Routes>
          <Route path="/anecdotes/:id" element={<Anecdote anecdoteById={anecdoteById} />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router> */}
    <Menu />
    <Footer />
    </div>
  )
}

export default App
