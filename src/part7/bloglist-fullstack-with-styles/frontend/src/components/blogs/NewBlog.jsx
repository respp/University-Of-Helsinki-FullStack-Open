import { useDispatch } from "react-redux";
import { newBlog } from "../../reducers/blogReducer";
import { notification } from "../../reducers/notificationReducer";
import './blog.css'
import { useState } from "react";

export const NewBlog = () => {
  const dispatch = useDispatch()
  const [blogAdded, setBlogAdded] = useState(null)

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
    setBlogAdded(`"${input.title.value}" fue añadido correctamente!!`)
    setTimeout(() => {
      setBlogAdded(null)
    }, 2000);

      // Vaciar los inputs
    input.title.value = '';
    input.author.value = '';
    input.url.value = '';
    input.description.value = '';

  }

  return (
    <div className="bg-blogs newblog">
      <form onSubmit={addBlog} className="form-new-blog">

        <h2>Nuevo Blog</h2>
        <div className="grid">
            <div className="col-1">
                <label htmlFor="title">Título </label>
                  <input
                    className="control"
                    id="title"
                    name="title"
                    required
                  />
                  <br />
                  <label htmlFor="author">Autor </label>
                  <input
                    className="control"
                    id="author"
                    name="author"
                    required
                  />
                  <br />
                  <label htmlFor="url">Link </label>
                  <input
                    className="control"
                    id="url"
                    name="url"
                    required
                  />
              <button type="submit" className='btn escribir-btn'>SUBIR BLOG</button>
            </div>


            <div className="col-2">
              <label htmlFor="url">Escribe el blog aquí... </label>
                <textarea
                  className="control input-description"
                  id="description"
                  name="description"
                  required
                />
                {
                  blogAdded && <p className='p-blog-added'>{blogAdded}</p>
                }
            </div>
        </div>


      </form>
    </div>
  )
}
