import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {FaYahoo} from 'react-icons/fa'
import React from 'react'
const YahooAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='yahoo' btnClassName='yahoo-auth-btn' displayText='Sign in with Yahoo ' successUrl={successUrl} failureUrl={failureUrl} icon={<FaYahoo className='icon'/> }   />
  )
}

export default YahooAuth