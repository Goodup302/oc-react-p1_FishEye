import React from "react"
import PropTypes from 'prop-types';
import {ReactComponent as LikeSVG} from "../../../assets/svg/like.svg";
import Media from "../Media";
import {openMedia} from "../popin/MediaViewer";

function CardMedia(props) {
    const {media} = props

    function handleClick(e, media) {
        e.preventDefault();
        openMedia(media)
    }

    return <div className="card-media">
        <div onClick={(e) => handleClick(e, media)}>
            <Media media={media} />
        </div>
        <div className="d-flex justify-content-between">
            <p>{media.title}</p>
            <span className="like">
                {media.likes}
                <LikeSVG/>
            </span>
        </div>
    </div>
}

export default CardMedia

Media.prototype = {
    photographer: PropTypes.object
}
