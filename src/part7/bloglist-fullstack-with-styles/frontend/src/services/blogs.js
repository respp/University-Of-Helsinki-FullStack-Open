import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

// Interceptor para manejar errores de autenticación (como token expirado)
// axios.interceptors.response.use(
//   response => response, 
//   error => {
//     if (error.response && error.response.status === 401) {
//       // Si el token expiró, eliminamos el usuario logueado
//       window.localStorage.removeItem("loggedBlogappUser");
//       window.location.href = "/"; // Redirige a la página de inicio (login)
//     }
//     return Promise.reject(error);
//   }
// );

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (newObject, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.delete(`${baseUrl}/${id}`, config);
  return res.data;
};

const addComment = async (id, comment) => {
  const res = await axios.post(`${baseUrl}/${id}/comments`, {comment})
  return res.data
}

export default { getAll, create, update, setToken, deleteBlog, addComment };
