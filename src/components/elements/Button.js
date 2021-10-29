import React from "react"
import PropTypes from 'prop-types';

function Media(props) {
    const {text} = props
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a href="#" className="button btn" aria-label={text}>
        {text}
    </a>

}

export default Media

Media.prototype = {
    text: PropTypes.string
}
