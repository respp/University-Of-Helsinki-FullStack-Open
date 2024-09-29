import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../reducers/userReducer";
import './login.css'

export const RegisterForm = ({ setIsRegistering, isRegistering }) => {
    useEffect(() => {
        console.log(`${ isRegistering } este es mi valor`)
      }, [isRegistering])

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nameError, setNameError] = useState(false) //false
    const [passwordError, setPasswordError] = useState(false) //false
    const [userNameError, setUserNameError] = useState(false) //false
    const [error, setError] = useState(null) //null

    const handleCreateAccount = async (e) => {
      e.preventDefault();

      if (!name || !username || !password) {
        setError('Todos los campos son obligatorios.');
        setNameError(true);
        setUserNameError(true);
        setPasswordError(true);
        setTimeout(() => {
            setNameError(false);
            setUserNameError(false);
            setPasswordError(false);
          setError(null)
        }, 2000);
        return;
      }
    
      if (password.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres.');
        setPasswordError(true);
        setTimeout(() => {
            setPasswordError(false);
            setError(null)
          }, 2000);
        return;
      }

      if (name.length < 5) {
        setError('El nombre debe tener al menos 5 caracteres.');
        setNameError(true);
        setPasswordError(true);
        setTimeout(() => {
            setNameError(false);
            setPasswordError(false);
            setError(null)
          }, 2000);
        return;
      }

      if (username.length < 5) {
        setError('El usuario debe tener al menos 5 caracteres.');
        setUserNameError(true);
        setPasswordError(true);
        setTimeout(() => {
            setUserNameError(false);
            setPasswordError(false);
            setError(null)
          }, 2000);
        return;
      }


      console.log("Creando cuenta con ", username, password, name);
      try {
          await dispatch(createAccount({ username, password, name })); // Asegúrate de tener la acción adecuada
          setName("")
          setUsername("");
          setPassword("");
      } catch (err) {
        let errorData = err.response.data.error || 'error creating the account'
          console.error('El error es: ', err);
          setError(`${ errorData }`)
        setPasswordError(true);
        setTimeout(() => {
        setPasswordError(false);
        setError(null)
        }, 2000);
      }
  };



  return (
    <Form data-testid="form" className='login-form'>
        <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-form'>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Renzo Espinosa Barcos" name="Name"
            onChange={({ target }) => setName(target.value)}
            data-testid="username"  className={`control password ${nameError ? 'password-error' : ''}`} />
      </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-form'>Username</Form.Label>
        <Form.Control type="text" value={username} placeholder="@renzobarcos" name="Username"
            onChange={({ target }) => setUsername(target.value)}
            data-testid="username"  className={`control password ${userNameError ? 'password-error' : ''}`} />
      </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-3 group-error" controlId="formBasicPassword">
        <Form.Label className='label-form'>Password</Form.Label>
        <div>
        <Form.Control type="password" value={password} placeholder="************" name="Password" onChange={({ target }) => setPassword(target.value)}
            data-testid="password"  className={`control password ${passwordError ? 'password-error' : ''}`} />
            {
              passwordError && <p className='p-error'>{error}</p>
            }
        </div>
      </Form.Group>
        </div>
        <div className="two-btns">
            <Button className='btn create-btn' variant='outline-primary' type="submit" onClick={handleCreateAccount}>CREAR CUENTA</Button>{''}
            <Button className='btn login-btn' variant='outline-primary' type="button" onClick={()=> setIsRegistering(false)}>INICIAR SESION</Button>{''}
            <p className='sugerencia'>¿Ya eres usuario de Blognest?</p>
        </div>
      </Form>
  )
}