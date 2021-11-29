import React from "react";
import './Card.css';

function Card({src, title, description, location, price}) {
    return (
        <div className='card'>
            <div className='card__infoTop'>
                <h2>{location}</h2>
            </div>
            
            <div style={{backgroundImage: `url(${src})`}} className='card__img'>

            </div>

            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>

            </div>
           
        </div>
    )
} 

export default Card