import React from "react";

function Tag(props) {
    const {name} = props

    return <a href="/" className="media-tag sr-only" aria-label={name} itemProp="url">
        <div>
            <span>{name}</span>
        </div>
    </a>
}

export default Tag
