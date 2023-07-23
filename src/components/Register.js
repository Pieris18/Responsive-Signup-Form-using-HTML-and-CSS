import React from 'react'
import './style.css';


const Register = () => {
  return (
 
      <div className='main'>
      <input type='checkbox' id='chk' aria-hidden='true'/>

      <div className='register'>
        <form>
          <label for='chk' aria-hidden='true'>Register</label> 
          <input type='text' name='name' placeholder='User Name' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <input type='password' name='password' placeholder='Password' required/>

          <button>Register</button>
        </form>
      </div>
 
      <div className='login'>
            <form>
              <label for='chk' aria-hidden='true'>Login</label> 
              <input type='email' name='email' placeholder='Email' required/>
              <input type='password' name='password' placeholder='Password' required/>

              <button>Login</button>
            </form>
        </div>

    </div>

  )
}

export default Register
