import React from "react"
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function MediaLink(props) {
    const {returnLink, media, children} = props

    const photographerId = media.photographerId
    const mediaId = media.id

    let link = `/media/${mediaId}/${photographerId}`

    if (returnLink) link = `${link}?closeLink=${window.location.pathname}`

    return <Link to={link}>
        <div>{children}</div>
    </Link>
}

export default MediaLink

MediaLink.prototype = {
    media: PropTypes.object,
    returnLink: PropTypes.bool,
}
