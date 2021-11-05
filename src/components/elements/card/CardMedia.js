import React from "react"
import PropTypes from 'prop-types';
import {ReactComponent as LikeSVG} from "../../../assets/svg/like.svg";
import Media from "../Media";
import $ from "jquery";

function CardMedia(props) {
    const {media} = props

    function handleClick(e, media) {
        e.preventDefault();
        const viewer = $('#MediaViewerModal')
        viewer.addClass('show')
        viewer.attr('media-id', media.id)
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
