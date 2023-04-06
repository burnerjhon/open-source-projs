import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {SiNotion} from 'react-icons/si'

const NotionAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='notion' btnClassName='notion-auth-btn' displayText='Sign in with Notion ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiNotion className='icon'/> }   />
  )
}

export default NotionAuth