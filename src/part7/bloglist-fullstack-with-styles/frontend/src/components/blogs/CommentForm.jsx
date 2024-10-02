import React from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../../reducers/blogReducer'
import './blog.css'


export const CommentForm = ({ id }) => {
  const dispatch = useDispatch()

    const addComment = e =>{
      e.preventDefault()
      const comment = e.target.comment.value
      console.log(comment)
      dispatch(commentBlog(id, comment))
      e.target.comment.value = ''
    }

  return (
    <div>
      <form onSubmit={addComment}>
          <input
            id="comment"
            name="comment"
             className='new-control'
            required
          />
          <button className='btn-create' type="submit">Send</button>
      </form>
    </div>
  )
}
