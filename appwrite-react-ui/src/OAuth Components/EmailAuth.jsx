import { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import { Account, ID  } from 'appwrite'

const EmailAuth = ({client, redirectURL}) => {
  const [showPopup, setshowPopup] = useState(false)
  const account = new Account(client) 
  return (
    <button className="email-auth-btn"
    onClick={()=>{
      setshowPopup(!showPopup)
    }}
    ><MdEmail className='icon' /> &nbsp; Sign in with Email
    <EmailPromptPopup showPopup={showPopup} setshowPopup={setshowPopup} />
    </button>
  )
}

export default EmailAuth


const EmailPromptPopup = ({showPopup, setshowPopup}) =>{
  return(
    <>
    <div className={showPopup ? 'popup' : 'popup-closed'}
    onClick={()=>{
      setshowPopup(false)
    }}
    >
      <form className='form'
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <label className='label'>Email</label>
        <input className='email' type="email" placeholder="Email" />
        <label className='label'>Password</label>
        <input className='password' type="password" placeholder="Password" />
        <button className='submit' type="submit">Sign in</button>
        </form>
     </div>
    </>
  )
}