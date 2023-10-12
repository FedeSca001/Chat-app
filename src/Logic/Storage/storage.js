export const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      return storedUser;
    }
}

export function newUser (){
    const user = { 
        name: 'John', 
        email: 'john@example.com',
        password: '123456' };
    localStorage.setItem('user', JSON.stringify(user));
}

export function deleteUser (){
    localStorage.removeItem('user');
}