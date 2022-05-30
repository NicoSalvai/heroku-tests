import pawPrint from '../../../images/pawprint 1.png'
import './productos.css'
import React from 'react';
import churrasquito from '../../../images/churrasquito.png'
import comedero from '../../../images/comedero.png'
import juguete from '../../../images/Huesito.png'
import ProductCard from '../product-card/ProductCard';

export default function Productos(){
    const [cards, setCards] = React.useState([
        {
            img: churrasquito,
            productName: "Juguete Churrasquito",
            price: 150
        },
        {
            img: comedero,
            productName: "Comedero para perro",
            price: 250
        },
        {
            img: juguete,
            productName: "Juguete Huesito",
            price: 650
        }
    ])

    const cardTags = cards.map((card) => (
        <ProductCard
            {...card}
        />
    ))
    

    return (
        <div className="container">
            <img src={pawPrint} className="pawprint"/>
            <h1 className='title'>Productos Destacados</h1>
            <div className='tags'>
                <p>Comederos - Accesorios - Comida</p>
            </div>
            <div className='card-list'>
                {cardTags}
            </div>
        </div>
    )
}