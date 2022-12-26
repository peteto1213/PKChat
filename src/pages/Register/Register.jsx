import React from 'react';
import { FaFileImage } from 'react-icons/fa'
import ReactFileReader from 'react-file-reader'

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
          
          <div className='upload'>         
            <ReactFileReader>
              <div className="container">
                <FaFileImage className='icon'/>
                <span>Add an avatar</span>
              </div>
            </ReactFileReader>
          </div>
          
          <button>Sign up</button>
        </form>

        <span>Already have an account? <a href="#">Login</a></span>

      </div>

    </div>
  );
}

export default Register;
