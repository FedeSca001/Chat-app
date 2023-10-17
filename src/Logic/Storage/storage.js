export const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const userObj = JSON.parse(storedUser);
        return userObj;
    }
}

export function newUser (name,lastName,password,email,age){
    const user = { 
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