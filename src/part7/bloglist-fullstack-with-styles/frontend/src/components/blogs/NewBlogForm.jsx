import { useDispatch } from "react-redux";
import { newBlog } from "../../reducers/blogReducer";
import { notification } from "../../reducers/notificationReducer";
import './blog.css'


export const NewBlogForm = () => {
  const dispatch = useDispatch()

  const addBlog = e =>{
    e.preventDefault()
    const input = e.target
    const content = {
      title : input.title.value,
      author : input.author.value,
      url : input.url.value,
      likes : 0,
      description: input.description.value
    }
    dispatch(newBlog(content))
    dispatch(notification(`the blog "${content.title}" by ${content.author} was added`, 5))
  }

  return (
    <div  className="new-blog">
      <h2>Create new blog</h2>
      <form onSubmit={addBlog} className="form-new-blog">
        {/* <div> */}
          <label htmlFor="title">title: </label>
          <input
            className="control"
            id="title"
            name="title"
            required
          />
          <br />
          <label htmlFor="author">author: </label>
          <input
            className="control"
            id="author"
            name="author"
            required
          />
          <br />
          <label htmlFor="url">url: </label>
          <input
            className="control"
            id="url"
            name="url"
            required
          />
          <br />
          <label htmlFor="url">description: </label>
          <input
            className="control"
            id="description"
            name="description"
            required
          />
          <br />
          <button type="submit" className="btn-create">Create</button>
        {/* </div> */}
      </form>
    </div>
  );
};
