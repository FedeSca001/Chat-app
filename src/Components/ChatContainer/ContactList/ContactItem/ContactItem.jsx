
import axios from 'axios';
import './ContactItem.css'

export function ContactItem(props) {
const { dato,userA } = props;
const fetchRoom = async () => {
  try {
    // Busca una sala donde estén los dos usuarios
    const result = await axios.get(`http://localhost:5000/room/db/${userA.id_usuario}/${dato.id_usuario}`);
    if (result.data.length > 0) {
      // Si la encuentra, setea el sessionStorage con el id de la sala
      const salaEncontrada = result.data[0];
      sessionStorage.setItem('id_sala', salaEncontrada.id_sala);
    } else {
      // Crea la sala para estos dos usuarios
      const body = { "id_usera": userA.id_usuario, "id_userb": dato.id_usuario };
      const newRoom = await axios.post(`http://localhost:5000/room/db/nueva-sala`, body);

      // Obtén la sala recién creada
      const room = await axios.get(`http://localhost:5000/room/db/${userA.id_usuario}/${dato.id_usuario}`);
      
      // Setea el sessionStorage con el id de la sala recién creada
      const salaCreada = room.data[0];
      sessionStorage.setItem('id_sala', salaCreada.id_sala);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className="contact-card"
      onClick={fetchRoom}>
      <div className="contact-profile">
        <img className='contact-img'
            src={'https://st5.depositphotos.com/50037850/64343/v/450/depositphotos_643435830-stock-illustration-reapor-minecraft-gaming-video-vector.jpg'} 
            alt={dato.nombre} />
      </div>
      <div className="contact-info">
        <h3 className='contact-info-name'>{dato.nombre} {dato.apellido}</h3>
        <p className='contact-info-p'>{dato.mail}</p>
      </div>
    </div>
  );
}
