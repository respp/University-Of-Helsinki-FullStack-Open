import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../reducers/userReducer'
import './users.css'



const NavigationMenu = () => {
  const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout())
      };
  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
      <Container className="custom-container">
        <img src="/public/images/icon.png" className="logo" alt="Logo" />
        <Navbar.Brand className="nav-title" href="/">BlogNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">BLOGS</Nav.Link>
            <Nav.Link as={Link} to="/users">USERS</Nav.Link>
            <div className="logged-in">
            <Nav.Link>{user.username}</Nav.Link> 
            <Nav.Link as='p' className="sesion">
              <button className="btn-logged" onClick={handleLogout}>
                cerrar sesión
                <img src="/public/images/logout.png" className="logout" alt="logout" />
              </button>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
