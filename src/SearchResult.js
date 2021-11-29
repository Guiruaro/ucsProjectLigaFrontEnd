import React from "react";
import './SearchResult.css';

function SearchResult({
    img,
    location,
    title,
    description,
}) {
    

    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default SearchResult