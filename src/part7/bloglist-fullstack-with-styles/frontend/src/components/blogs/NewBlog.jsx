import { useDispatch } from "react-redux";
import { newBlog } from "../../reducers/blogReducer";
import { notification } from "../../reducers/notificationReducer";
import './blog.css';
import { useState } from "react";

export const NewBlog = () => {
  const dispatch = useDispatch();
  const [blogAdded, setBlogAdded] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const addBlog = async (e) => {
    e.preventDefault();
    const { title, author, url, description } = e.target.elements;
    const content = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0,
      description: description.value,
    };

    try {
      await dispatch(newBlog(content));
      dispatch(notification(`the blog "${content.title}" by ${content.author} was added`, 5));
      setBlogAdded(`"${content.title}" fue añadido correctamente!!`);
      setTimeout(() => setBlogAdded(null), 2000);
      e.target.reset(); // Vaciar los inputs
    } catch (error) {
      setErrorMessage("Hubo un error al añadir el blog. Por favor, inténtalo de nuevo.");
      console.error("Error al añadir el blog:", error);
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

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
              maxLength="65"
            />
            <br />
            <label htmlFor="author">Autor </label>
            <input
              className="control"
              id="author"
              name="author"
              required
              maxLength="30"
            />
            <br />
            <label htmlFor="url">Link </label>
            <input
              className="control"
              id="url"
              name="url"
              required
              maxLength="200"
            />
            <button type="submit" className='btn escribir-btn'>SUBIR BLOG</button>
          </div>

          <div className="col-2">
            <label htmlFor="description">Escribe el blog aquí... </label>
            <textarea
              className="control input-description"
              id="description"
              name="description"
              required
              maxLength="7000"
            />
            {blogAdded && <p className='p-blog-added'>{blogAdded}</p>}
            {errorMessage && <p className='p-error-message'>{errorMessage}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};
