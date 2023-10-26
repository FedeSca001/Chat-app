import { useParams } from 'react-router-dom'
import './MessageList.css'
export function MessageList (){
    const {userchat} = useParams
    return(
        <p>MessageList: recibe el chat y lo renderiza {userchat}</p>
    )
}