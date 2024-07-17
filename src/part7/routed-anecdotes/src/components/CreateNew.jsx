import { useState } from "react"
import { Notification } from "./Notification"
import { useField } from "../hooks"

export const CreateNew = ({ addNew }) => {
  // const [author, setAuthor] = useState('')
  // const [content, setContent] = useState('')
  // const [info, setInfo] = useState('')
  const author = useField('author')
  const content = useField('content')
  const info = useField('info')
  const [notification, setNotification] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content,
      author,
      info,
      votes: 0
    })
    setNotification(`the anecdote "${content.value}" by ${author.value} was created`)
    setTimeout(()=>{
      setNotification(null)
    }, 5000)
  }

  const handleReset =()=>{
    author.reset()
    content.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          {/* <input name='content' value={content} onChange={(e) => setContent(e.target.value)} /> */}
          <input {...content.inputProps} />
        </div>
        <div>
          author
          {/* <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} /> */}
          <input {...author.inputProps} />
        </div>
        <div>
          url for more info
          {/* <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} /> */}
          <input {...info.inputProps} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={handleReset}>reset</button>
      </form>
      <Notification notification={notification} />
    </div>
  )

}