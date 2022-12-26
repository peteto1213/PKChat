import React from 'react'
import { MdOutlineImage, MdAttachFile } from 'react-icons/md'

function Input() {
  return (
    <div className='input'>
      <input
        type="text"
        placeholder='Type something...'
      />
      <div className="send">
        <MdAttachFile className='icon' />
        <input type="file" style={{ display:'none' }} id='file' />
        <label htmlFor="file">
          <MdOutlineImage  className='icon' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
