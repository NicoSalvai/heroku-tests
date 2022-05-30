import './navbar.css'
import {IoPawOutline} from 'react-icons/io5'
import catIcon from '../../images/Cat.png'
import dogIcon from '../../images/Dog.png'

export default function Navbar(){
    return (
        <nav>
            <div className="navbar-upper">
                <p>Grandes ofertas en comederos</p>
                <div className="navbar-upper-options">
                    <p>Español </p>
                    <p>ARG$ </p> 
                </div>
            </div>
            <div className="navbar-main">
                <h2>
                    <img src={catIcon}/> 
                    Front <span className="white-text">Cat&Dog</span> 
                    <img src={dogIcon}/>
                </h2>
                <ul>
                    <li>
                        <a><IoPawOutline/>Categorias</a>
                    </li>
                    <li>
                        <a><IoPawOutline/>Pets</a>
                    </li>
                    <li>
                        <a><IoPawOutline/>Nosotros</a>
                    </li>
                    <li>
                        <a><IoPawOutline/>Contactanos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}