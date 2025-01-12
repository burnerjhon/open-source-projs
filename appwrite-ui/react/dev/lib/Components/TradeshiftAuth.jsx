import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import React from 'react'
const TradeshiftAuth  = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='tradeshift' btnClassName='tradeshift-auth-btn' displayText='Sign in with Tradeshift' successUrl={successUrl} failureUrl={failureUrl} icon={<TradeshiftLogo className='icon'/> }   />
  )
}

export default TradeshiftAuth

function TradeshiftLogo ()  {
    return (<svg className='icon' xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M29.063 10.474H.962c-.56 0-.962.32-.962.842v7.216c0 .32.2.64.56.762l.4.12H18.04v33.272c0 .52.4.882.962.882h10.022c.56 0 .962-.36.962-.882v-41.37c.04-.52-.36-.842-.922-.842"/><path d="M63.075 10.434h-28.1c-.56 0-.962.32-.962.842v41.41c0 .52.4.842.962.842h10.022c.56 0 .962-.36.962-.842V19.413h17.077c.16 0 .28-.04.4-.08.36-.12.56-.44.56-.802v-7.216c.04-.52-.36-.882-.922-.882" fill="#00a1ea"/></svg>)
}