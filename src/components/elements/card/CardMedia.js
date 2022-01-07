import React from "react"
import PropTypes from 'prop-types';
import {ReactComponent as LikeSVG} from "../../../assets/svg/like.svg";
import Media from "../Media";
import MediaLink from "../MediaLink";

function CardMedia(props) {
    const {media} = props

    return <div className="card-media">
        <MediaLink media={media} returnLink={true}>
            <Media media={media} />
        </MediaLink>

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
