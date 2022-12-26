import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">PKChat</span>
      <div className="user">
        <img src="" alt="" />
        <span>Username</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
