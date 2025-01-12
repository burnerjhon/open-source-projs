import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {TbBrandZoom} from 'react-icons/tb'
import React from 'react'
const ZoomAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='zoom' btnClassName='zoom-auth-btn' displayText='Sign in with Zoom' successUrl={successUrl} failureUrl={failureUrl} icon={<TbBrandZoom className='icon'/> }   />
  )
}

export default ZoomAuth