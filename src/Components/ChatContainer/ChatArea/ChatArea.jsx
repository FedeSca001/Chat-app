import './ChatArea.css'
import { MessageInput } from './MessageInput/MessageInput'
import { MessageList } from './MessageList/MessageList'
export function ChatArea (){
    return(
        <>
            <h2>Chat Area:</h2>
            <MessageList/>
            <MessageInput/>
        </>
    )
}