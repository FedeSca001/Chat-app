import './ChatArea.css'
import { MessageInput } from './MessageInput/MessageInput'
import { MessageList } from './MessageList/MessageList'
//import { useEffect, useState } from 'react'
import './ChatArea.css'
import { Route, Routes, useParams } from 'react-router-dom'

export function ChatArea (props){
    const {item} = useParams()

    /*const { user, messages } = props;
    console.log(user, messages);/*
    const [msg,setMsg] = useState([])
    useEffect(()=>{
        getMessages ?
        setMsg(getMessages) :
        setMsg([])
    },[])*/
    return (
        <>
          <h2>Chat Area:</h2>
          <section className='section-messages'>
            <Routes>
              <Route path='/' element={<p>Hola</p>} />
              <Route path='/chat/:userChat' element={<MessageList />} />
            </Routes>
          </section>
          <MessageInput />
        </>
      );
}