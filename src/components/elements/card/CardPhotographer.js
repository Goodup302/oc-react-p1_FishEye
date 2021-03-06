import React from "react";
import Media from "../Media";
import Tag from "../Tag";
import {Link} from "react-router-dom";

function CardPhotographer(props) {
    const {photographer} = props

    return <div className="card-photographer d-flex flex-column align-items-center">
        <Link to={"/photographer/"+photographer.id}>
            <div className="d-flex flex-column align-items-center">
                <Media photographer={photographer} />
                <h2 aria-label={photographer.name} className="name">{photographer.name}</h2>
            </div>
        </Link>

        <div className="d-flex flex-column align-items-center">
            <p className="location" tabIndex="0">{photographer.city}, {photographer.country}</p>
            <p className="tagline" tabIndex="0">{photographer.tagline}</p>
            <p className="price" tabIndex="0">${photographer.price}/day</p>

            <div className="d-flex flex-row align-items-center">
                {photographer.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
            </div>

        </div>
    </div>
}

export default CardPhotographer;


// "id": 342550,
// "photographerId": 82,
// "title": "Fashion Yellow Beach",
// "image": "Fashion_Yellow_Beach.jpg",
// "tags": ["fashion"],
// "likes": 62,
// "date": "2011-12-08",
// "price": 55
