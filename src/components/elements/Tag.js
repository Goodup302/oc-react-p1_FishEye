import React from "react";
import {Link} from "react-router-dom";

function Tag(props) {
    const {name} = props

    return <Link to={'/tag/'+name} itemProp="url" className="media-tag sr-only" aria-label={name}>
        <div>
            <span>{name}</span>
        </div>
    </Link>


}

export default Tag
