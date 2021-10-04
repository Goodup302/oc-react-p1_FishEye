import React from "react"
import PropTypes from 'prop-types';
import {ReactComponent as LikeSVG} from "../../../assets/svg/like.svg";
import Media from "../Media";

function CardMedia(props) {
    const {media} = props
    return <div className="card-media">
        <Media media={media} />
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
