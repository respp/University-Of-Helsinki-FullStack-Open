import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../reducers/userReducer'



const NavigationMenu = () => {
  const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout())
      };
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" bg="dark" data-bs-theme="dark">
      <Container className="custom-container">
        <Navbar.Brand className="nav-title" href="/">BlogNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <div className="logged-in">
            <Nav.Link>{user.username} logged in</Nav.Link> 
            <Nav.Link><button className="btn-logged" onClick={handleLogout}>logout</button></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
