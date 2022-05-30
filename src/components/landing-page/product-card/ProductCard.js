import './productcard.css'

export default function ProductCard(props) {
    return (
        <div className="card">
            <img src={props.img}/>
            <p>{props.productName}</p>
            <h5>${props.price}</h5>
        </div>
    )
}