import React from 'react'
import { FaVideo, FaUserPlus, FaEllipsisH } from 'react-icons/fa'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

function Chat() {
  return (
    <div className='chat'>

     <div className="chatInfo">
      <span>Username</span>
      <div className="chatIcons">
        <FaVideo className='icon'/>
        <FaUserPlus className='icon'/>
        <FaEllipsisH className='icon'/>
      </div>

     </div>

      <Messages />
      <Input />
    </div>
  )
}

export default Chat
