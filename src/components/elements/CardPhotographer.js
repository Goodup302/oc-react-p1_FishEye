import React from "react";
import Media from "./Media";
import Tag from "./Tag";

function CardPhotographer(props) {
    const {photographer} = props

    return <div className="card-photographer d-flex flex-column align-items-center">
        <Media photographer={photographer} />

        {/*<p className="">{photographer.id}</p>*/}

        <div className="card-photographer-content  d-flex flex-column align-items-center">
            <p className="name">{photographer.name}</p>
            <p className="location">{photographer.city}, {photographer.country}</p>
            <p className="tagline">{photographer.tagline}</p>
            <p className="price">${photographer.price}/day</p>

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
