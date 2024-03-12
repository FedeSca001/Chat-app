
export const getMessages = () => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
        const messagesObj = JSON.parse(storedMessages);
        return messagesObj;
    }
}
