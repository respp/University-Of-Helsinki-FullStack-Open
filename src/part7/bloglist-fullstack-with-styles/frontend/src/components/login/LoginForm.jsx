import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, createAccount } from "../../reducers/userReducer";
import { error } from "../../reducers/errorMessageReducer";
import './login.css'


export const LoginForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log("loggin in with ", username, password);
      try {
          await dispatch(login({username, password}))
          setUsername("");
          setPassword("");
      } catch (err) {
        console.error('el error es: ',err)
        dispatch(error('wrong username or password', 5))
      }
    }

    const handleCreateAccount = async (e) => {
      e.preventDefault();
      const name = username
      console.log("Creando cuenta con ", username, password);
      try {
          await dispatch(createAccount({ username, password, name })); // Asegúrate de tener la acción adecuada
          setUsername("");
          setPassword("");
      } catch (err) {
          console.error('El error es: ', err);
          dispatch(error('error creating the account', 5));
      }
  };



  return (
    <Form data-testid="form" className='login-form'>
        <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-form'>Username</Form.Label>
        <Form.Control type="text" value={username} placeholder="@renzobarcos" name="Username"
            onChange={({ target }) => setUsername(target.value)}
            data-testid="username"  className='control' />
      </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-form'>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="************" name="Password" onChange={({ target }) => setPassword(target.value)}
            data-testid="password" className='control'/>
      </Form.Group>
        </div>
        <div className="two-btns">
            <Button className='btn create-btn' variant='outline-success' type="submit" onClick={handleCreateAccount}>CREAR CUENTA</Button>{''}
            <Button className='btn login-btn' variant='outline-primary' type="submit" onClick={handleLogin}>INICIAR SESION</Button>{''}
        </div>
      </Form>
  )
}
