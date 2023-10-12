import './Authentication.css'
import { CreateUser } from './CreateUser/CreateUser'
import { Login } from './Login/Login'
export function Authentication (){
    return(
        <>
            <Login/>
            <CreateUser/>
        </>
    )
}