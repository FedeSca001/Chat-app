import './ChatArea.css'
import { MessageInput } from './MessageInput/MessageInput'
import { MessageList } from './MessageList/MessageList'
import { getMessages } from '../../../Logic/Storage/storage'
import { useEffect, useState } from 'react'
import './ChatArea.css'

export function ChatArea (props){
    const { user, messages } = props;
    const [msg,setMsg] = useState([])
    useEffect(()=>{
        getMessages ?
        setMsg(getMessages) :
        setMsg([])
    },[])
    return(
        <>
            <h2>Chat Area:</h2>
            <MessageList/>
            <MessageInput/>
        </>
    )
}