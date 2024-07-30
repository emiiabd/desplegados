import React, { useState } from 'react';
import userInfo from '../../Data/userData';
import { useNavigate } from 'react-router-dom';

const Login = () => {

// INITIALS STATES
  const initialState={
    username:'',
    password:''
  };

  const initialStateError={
    username:[],
    password:[],
    globalError:[],
  };

// STATES AND NAVIGATION FUNCTIONS 
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(initialState);
  const [errors, setErrors] = useState(initialStateError);

// VALIDATES FUNCTIONS
  const handleChangeValue = (e) => setLoginForm({...loginForm, [e.target.name]: e.target.value});
  const validateUsernameLength = (value) => value.length > 3;
  const findErrors = (from, idError) => errors[from].find(error => error.id === idError);


  
// ERRORS DICCIONARY
  const ERRORS = {
    usernameErrorLength: { 
      text: 'El nombre de usuario tiene que tener mas de 10 caracteres', 
      id: 1, 
      validate: validateUsernameLength
    },
    userNotFound: { 
      text: 'El usuario no existe', 
      id: 2
    }, 
  }

  
// MAIN VALIDATION FUNCTION
  const validateError = (from, toValidate) => {
    /* Si existe un error en el estado de errores */
    if(findErrors(from, toValidate.id)){
      /* Verificar si se sigue cumpliendo el error */
      if(toValidate.validate(loginForm[from])){
        /* Si no se cumple el error, se elimina el error de la lista de errores */
        const newUsernameErrors= errors[from].filter(error => error.id !== toValidate.id)
        setErrors({...errors, [from]: newUsernameErrors})
      }
    
    }
    /* Si no existe un error en el estado de errores */
    else{
      /* Verificar si se cumple la validacion */
      if(!toValidate.validate(loginForm[from])){
        /* Si no se cumple la validacion, se agrega el error a la lista de errores */
        setErrors({...errors, [from]: [...errors[from], toValidate]})
    }
  }
  }

  const handleAbortInput = () =>{
    console.log(errors)
    validateError('username', ERRORS.usernameErrorLength);
  }

// SUBMIT FUNCTION
  const handleLogin = (e) =>{
    e.preventDefault();
    for(const user of userInfo){
      if(user.username === loginForm.username && user.password === loginForm.password){
        localStorage.setItem('user', JSON.stringify(user));
        return navigate('/');
      }
    }
    return setErrors({...errors, ['globalError']: [...errors['globalError'], ERRORS.userNotFound]}); /* MIRAR DESPUES BIEN */
  }
  

  return (
    <main>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nombre de usuario: </label>
          <input 
            onBlur={handleAbortInput} 
            type="text" 
            placeholder="username" 
            id='username' 
            name='username' 
            onChange={handleChangeValue} 
            value={loginForm.username}/>
          {
            errors.username.length > 0 &&
            errors.username.map((error, index) => <span key={index}>{error.text}</span>)
          }
        </div>
        <div>
          <label htmlFor="password">Contrase;a: </label>
          <input type="password" placeholder="Password" id='password' name='password' onChange={handleChangeValue} value={loginForm.password}/>
        </div>
        {
          errors.globalError.map((error) => <span key={error.id}>{error.text}</span>)
        }
        <button type="submit" >Iniciar Sesion</button>
      </form>
    </main>
  );
};

export default Login;