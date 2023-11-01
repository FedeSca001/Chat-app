Componentes:
- App (ChatApp) // obtiene datos del localstorage

  - ChatContainer//envia mensages y user a los childrens
    - ContactList
      - ContactItem
    - ChatArea
      - MessageList
        - Message
      - MessageInput
        - MessageComposer

  - Navbar
    - Notification

  - Authentication
    - Login
    - CreateUser
Logic:
  - Storage
  - User

  Cuerpo de MENSAGE = {
          id: crypto.randomUUID(),
          fromUser: fromUser,
          toUser: toUser,
          message: message,
          date: new Date()
    }