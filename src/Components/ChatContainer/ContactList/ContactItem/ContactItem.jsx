
import './ContactItem.css'

export function ContactItem(props) {
  const { dato } = props;

  return (
    <div className="contact-card">
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
