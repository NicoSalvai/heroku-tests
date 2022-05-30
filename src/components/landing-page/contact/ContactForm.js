import './contactform.css'

export default function ContactForm() {
    return (
        <div className='contact-form'>
            <h1>Contáctanos</h1>
            <input type="text" placeholder='Nombre y Apellido'/>
            <input type="text" placeholder='Ingresa tu correo electronico'/>
            <input type="text" placeholder='Telefono'/>
            <div className='contact-form-buttons'>
                <button className='reset-button'>Resetear</button>
                <button className='send-button'>Enviar</button>
            </div>
        </div>
    )
}