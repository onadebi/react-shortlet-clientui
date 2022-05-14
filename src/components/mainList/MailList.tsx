import React from 'react'
import './mailList.scss';

const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className="mailTitle">Save time and money!</h1>
        <span className="mailDesc">Sign up to be notified of the best deals</span>
        <div className="mailInputContainer">
          <input type="text" placeholder='Your email' />
          <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList