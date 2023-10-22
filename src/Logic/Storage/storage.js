export const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const userObj = JSON.parse(storedUser);
        return userObj;
    }
}
// ID crypto random
//const id = crypto.randomUUID()
export function newUser (name,lastName,password,email,age){
    const user = {
        id: crypto.randomUUID(),
        name: name,
        lastName:lastName,
        email: email,
        password: password,
        age: age
    };
    localStorage.setItem('user', JSON.stringify(user));
}

export function deleteUser (){
    localStorage.removeItem('user');
}

export const getMessages = () => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
        const messagesObj = JSON.parse(storedMessages);
        return messagesObj;
    }
}

const chat = {
    id: crypto.randomUUID(),
    fromUser: 'Pedro',
    toUser: 'Pablo',
    message: 'Hola brodi',
    date: new Date()
}
localStorage.setItem('messages', JSON.stringify(chat));

export function newMessage (message,fromUser, toUser ){
    const chat = {
        id: crypto.randomUUID(),
        fromUser: fromUser,
        toUser: toUser,
        message: message,
        date: new Date()
    }
    localStorage.setItem('messages', JSON.stringify(chat));
}