import {BiMailSend} from 'react-icons/bi'
import './footer.css'
import catIcon from '../../images/Cat.png'
import dogIcon from '../../images/Dog.png'
import phone from '../../images/phone-call 1.png'
import location from '../../images/location 1.png'
import mail from '../../images/correo-electronico 1.png'

export default function Footer(){
    const icons = [
        {
            img: location,
            title:"Localidad",
            descripcion:"Calle - provincia"
        },
        {
            img: phone,
            title:"Teléfono",
            descripcion:"Número de teléfono"
        },
        {
            img: mail,
            title:"Correo Electrónico",
            descripcion:"Dirección de correo"
        }
    ]

    const iconsList = icons.map(icon => (
        <div className="icon-group">
            <div className='icon'>
                <img src={icon.img}/>
            </div>
            <div className='icon-text'>
                <h3>{icon.title}</h3>
                <p>{icon.descripcion}</p>
            </div>
        </div>
    ))

    return (
        <footer>
            <div className='footer-main'>
                <h1><BiMailSend/>Suscríbete para más novedades</h1>
                <div className='subscribe'>
                    <input type="text" placeholder='Ingresá tu correo electronico'/>
                    <button>Subscribirme</button>
                </div>
            </div>
            <div className='footer-secondary'>
                <div className='icon-group-list'>
                    {iconsList}
                </div>
                <h2>
                    <img src={catIcon}/> 
                    Front <span className="white-text">Cat&Dog</span> 
                    <img src={dogIcon}/>
                </h2>
            </div>
            <div className='footer-last'>
                <p>Todos los derechos reservados Front End</p>
            </div>
        </footer>
    )
}