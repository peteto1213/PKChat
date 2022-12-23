import React from 'react';

function Register() {
  return (
    <div className='register'>

      <div className="form-container">

        <h1>PKChat</h1>
        <p>Register</p>

        <form>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email' />
          <input type="password"  placeholder='password' />
          <input type="password"  placeholder='confirm password' />
          <input type="file" className='avatar' placeholder='Add an avatar' />
          <button>Sign up</button>
        </form>

        <span>Already have an account? <a href="#">Login</a></span>

      </div>

    </div>
  );
}

export default Register;
