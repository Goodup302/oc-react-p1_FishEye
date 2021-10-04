import React from "react"
import PropTypes from 'prop-types';

function Media(props) {
    const {photographer, media} = props


    if (photographer) {
        const root = window.location.origin+"/images/photographers_logo/"
        return (
            <img className="avatar-photographer"
                 src={root+photographer.portrait}
                 alt={"Profile picture of photographer "+photographer.name}/>
        )
    }

    if (media) {
        const root = window.location.origin+"/images/photographers_media/"
        console.log(root+media.image)



        if (media.image) {
            return (
                <img src={root+media.image} alt=""/>
            )
        }
        if (media.video) {
            return (
                <video controls width="250" controlsList="">
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
