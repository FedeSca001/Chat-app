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

Rutas (end points):
  - Usuarios:
      OBTENER USUARIO CON SU USUARIO Y PASSWORD....../user/db/:usuario/:password         "GET"
      OBTENER UN USUARIO CON SU ID_USUARIO ........../user/db/:id_usuario                "GET"
      OBTENER TODOS LOS USUARIOS           ........../user/db/allusers                   "GET"
      AGREGAR USUARIOS                     ..../user/db                                  "POST"
          body:{ nombre_usuario, nombre, apellido, img_perfil, acerca_del_usuario, password, fecha_nacimiento, mail }

  - Salas:
      OBTENER TODAS LAS SALAS                             ....../room/db                  "GET"
      OBTENER CONTACTOS DE LAS SALAS DEL USUARIO LOGUEADO ....../room/db/:id_usuario      "GET"

  - Mensajes:
    OBTENER TODOS LOS MENSAJES             ........../msg/db/mensajes                     "GET"
    CREAR UN MENSAJE                       ........../msg/db/nuevo-mensaje                "POST"
          body:{ tipo_mensaje, valor_mensaje, from_user, id_sala }
