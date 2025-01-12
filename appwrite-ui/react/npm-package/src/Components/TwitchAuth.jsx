import React from 'react'
import {FaTwitch} from 'react-icons/fa'
import { Account } from 'appwrite'
import AuthButton from '../Helper/AuthButton.jsx'

const TwitchAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    // <button className="twitch-auth-btn"
    // onClick={()=>{
    //     account.createOAuth2Session('twitch', successUrl, failureUrl)
    //     }
    // }
    // ><FaTwitch className='icon' /> &nbsp; Sign in with Twitch</button>
    <AuthButton account={account} btnClassName='twitch-auth-btn' authProvider='twitch' successUrl={successUrl} failureUrl={failureUrl} icon={<FaTwitch className='icon' />} displayText='Sign in with Twitch' />
    )
}

export default TwitchAuth