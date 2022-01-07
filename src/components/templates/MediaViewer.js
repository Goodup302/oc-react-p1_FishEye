import React from "react";
import {ReactComponent as CloseSVG} from "../../assets/svg/close.svg";
import {ReactComponent as ArrowSVG} from "../../assets/svg/arrow.svg";
import {fishEyeData} from "../../index";
import Media from "../elements/Media";
import {Link} from "react-router-dom";

class MediaViewer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {mediaId, photographerId} = this.props.match.params

        const media = fishEyeData.getMedia(mediaId)
        const medias = fishEyeData.getMediaByPhotographer(photographerId)

        const urlParams = new URLSearchParams(window.location.search);
        const closeLink = urlParams.get('closeLink')
        let returnUrl = (closeLink) ? closeLink : "/"

        const currentIndex = medias.findIndex(media => media.id.toString() === mediaId);
        const prevIndex = currentIndex-1
        const nexIndex = currentIndex+1


        const prevMedia = medias[prevIndex]
        const nextMedia = medias[nexIndex]

        let prevMediaLink = null;
        let nextMediaLink = null;

        if (prevIndex >= 0) prevMediaLink = `/media/${prevMedia.id}/${photographerId}${window.location.search}`
        if (nexIndex < medias.length) nextMediaLink = `/media/${nextMedia.id}/${photographerId}${window.location.search}`

        console.log(medias.length-1)

        return (
            <div id="viewerMedia">

                <div className="mediaviewer-container">
                    <Link to={returnUrl} className="btn-close" aria-label="Return" title="Return">
                        <CloseSVG/>
                    </Link>

                    <div className="back-arrow">
                        {prevMediaLink &&
                        <Link to={prevMediaLink} className="back-arrow" title="Previous image"
                              aria-label="Previous image" itemProp="1">
                            <ArrowSVG/>
                        </Link>
                        }
                    </div>

                    <div className="image-container">
                        {media &&
                        <>
                            <Media media={media} />
                            <span>{media.title}</span>
                        </>
                        }
                    </div>

                    <div className="next-arrow">
                        {nextMediaLink &&
                        <Link to={nextMediaLink} className="next-arrow" title="Next image" aria-label="Next image"
                              itemProp="1">
                            <ArrowSVG/>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaViewer
