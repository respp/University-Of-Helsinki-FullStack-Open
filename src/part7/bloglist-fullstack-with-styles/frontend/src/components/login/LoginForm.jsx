import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/userReducer";
import './login.css'


export const LoginForm = ({ setIsRegistering, isRegistering }) => {

  useEffect(() => {
    console.log(`${ isRegistering } este es mi valor`)
  }, [isRegistering])
  
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false) //false
    const [error, setError] = useState(null) //null

  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log("loggin in with ", username, password);
      try {
          await dispatch(login({username, password}))
          setUsername("");
          setPassword("");
      } catch (err) {
        let errorData = err.response.data.error || 'invalid username or password'
        console.error('el error es: ',err.response.data.error)
        // dispatch(errorForm('wrong username or password', 5))
        setError(`${ errorData }`)
        setPasswordError(true);
        setTimeout(() => {
          setPasswordError(false);
          setError(null)
        }, 2000);

      }
    }

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
        <Form.Group className="mb-3 group-error" controlId="formBasicPassword">
        <Form.Label className='label-form'>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="************" name="Password" onChange={({ target }) => setPassword(target.value)}
            data-testid="password"  className={`control password ${passwordError ? 'password-error' : ''}`} />
            {
              passwordError && <p className='p-error'>{error}</p>
            }
      </Form.Group>
        </div>
        <div className="two-btns">
            <Button className='btn create-btn' variant='outline-primary' type="submit" onClick={handleLogin}>INICIAR SESION</Button>{''}
            <Button className='btn login-btn' variant='outline-primary' type="button" onClick={() => setIsRegistering(true)}>REGISTRATE</Button>{''}
            <p className='sugerencia'>¿Es tu primera vez en Blognest?</p>
        </div>
      </Form>
  )
}