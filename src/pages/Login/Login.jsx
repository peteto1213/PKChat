import React from 'react';

function Login() {
  return (
    <div className='login'>

      <div className="form-container">

        <h1>PKChat</h1>
        <p>Login</p>

        <form>
          <input type="email" placeholder='email' />
          <input type="password"  placeholder='password' />
          
          <button>Login</button>
        </form>

        <span>Don't have an account? <a href="#">Register</a></span>

      </div>

    </div>
  );
}

export default Login;
