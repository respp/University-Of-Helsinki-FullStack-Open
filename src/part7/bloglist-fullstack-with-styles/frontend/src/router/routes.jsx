import { Routes, Route, Navigate } from "react-router-dom";
import { DisplayBlogs } from "../components/blogs/DisplayBlogs";
import { DisplayUsers } from "../components/users/DisplayUsers";
import { LoginScreen } from "../components/login/LoginScreen";
import { useSelector } from "react-redux";
import { UserBlogs } from "../components/UserBlogs";
import { User } from '../components/users/User'
import Blog from "../components/blogs/Blog";
import { NewBlog } from "../components/blogs/NewBlog";
import { Footer } from "../components/blogs/Footer";

const AppRoutes = () => {
  const user = useSelector(state => state.user)

  if (user === null) return <LoginScreen />

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
          <User />
          <DisplayBlogs />
        </>
        } />
      <Route path="/users" element={
        <>
            <User />
            <DisplayUsers />
            {/* <Footer /> */}
        </>
        } />
      <Route path="/users/new-blog" element={
        <>
            <User />
            <NewBlog />
            {/* <Footer /> */}
        </>
        } />
      <Route path="/users/:id" element={
        <>
          <User />
          <UserBlogs />
        </>
        } />
        <Route path="/blogs/:id" element={
        <>
          <User />
          <Blog />
        </>
        } />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirigir rutas desconocidas a la página principal */}
    </Routes>
    </>
  );
};

export default AppRoutes;
