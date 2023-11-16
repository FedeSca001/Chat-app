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

Base de datos SQL:

    ----------                      --------                  ----------
    |Usuarios|                      |Salas |                  |Mensajes|
    ----------                      --------                  ----------
-"id_usuario"                      -"id_sala"                 - "id_mensaje"
-"nombre_usuario"                  -"id_mensaje" foranea ---->- "id_sala" 
-"nombre"                     <-----"id_userA"   foranea      - "valor_mensaje"
-"apellido"                   <-----"id_userB"   foranea      - "fecha_y_hora"
-"img_perfil"                      -                          - "tipo_mensaje"
-"acerca_del_usuario"              -                          - "from_user"
-"password"                        -                          -
-"fecha_nacimiento"                -                          -
-"mail"                            -                          -

Estructura de la Base de Datos SQL:
- Usuarios:
    id_usuario (Autoincremental, Clave Primaria)
    nombre_usuario (Único)
    nombre
    apellido
    img_perfil
    acerca_del_usuario
    password
    fecha_nacimiento
    mail

- Salas:
    id_sala (Autoincremental, Clave Primaria)
    id_mensaje (Clave Foránea a Mensajes)
    id_userA (Clave Foránea a Usuarios)
    id_userB (Clave Foránea a Usuarios)

- Mensajes:
    id_mensaje (Autoincremental, Clave Primaria)
    id_sala (Clave Foránea a Salas)
    tipo_mensaje
    valor_mensaje
    fecha_y_hora
    from_user
    
Notas Adicionales:
La tabla "Usuarios" almacena información sobre los usuarios.
La tabla "Salas" maneja la relación entre usuarios y mensajes, indicando qué usuarios están en qué salas.
La tabla "Mensajes" almacena los mensajes enviados en cada sala.