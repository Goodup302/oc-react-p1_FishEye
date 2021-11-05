import React from "react"
import PropTypes from 'prop-types';

function Media(props) {
    const {photographer, media} = props

    if (photographer) {
        const root = window.location.origin+"/images/photographers_logo/"
        const title = "Profile picture of photographer "+photographer.name
        return (
            <img className="avatar-photographer"
                 src={root+photographer.portrait}
                 alt={title} data-id={media}/>
        )
    }

    if (media) {
        const root = window.location.origin+"/images/photographers_media/"
        if (media.image) {
            return (
                <img src={root+media.image} alt="" data-id={media.id}/>
            )
        }
        if (media.video) {
            return (
                <video controls width="250" controlsList="" data-id={media.id}>
                    <source src={root+media.video} type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            )
        }
    }
}

export default Media

Media.prototype = {
    photographer: PropTypes.object
}
