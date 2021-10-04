import React from "react";
import Media from "./Media";
import Tag from "./Tag";

function EntryPhotographer(props) {
    const {photographer} = props
    return <div className="entry-photographer">
        <Media photographer={photographer} />
        <p className="name">{photographer.name}</p>

        <p className="location pb-4">{photographer.city}, {photographer.country}</p>
        <p className="tagline pb-4">{photographer.tagline}</p>

        {photographer.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
    </div>
}

export default EntryPhotographer
