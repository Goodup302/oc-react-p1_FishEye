import React from "react"
import PropTypes from 'prop-types';

function Media(props) {
    const {photographer, media} = props
    if (photographer) return <img src={"images/photographers_logo/"+photographer.portrait}
                                  alt={"Profile picture of photographer "+photographer.name}/>
    if (media) return <img src={media} alt=""/>
}

export default Media

Media.prototype = {
    photographer: PropTypes.object
}
