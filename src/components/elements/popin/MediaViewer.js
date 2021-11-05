import React from "react";
import {ReactComponent as CloseSVG} from "../../../assets/svg/close.svg";
import {ReactComponent as ArrowSVG} from "../../../assets/svg/arrow.svg";
import $ from "jquery";

function MediaViewer(props) {

    // const photographer = props.photographer
    console.log(props.data)

    // const viewer = $('#MediaViewerModal')
    // viewer.addClass('show')
    // viewer.attr('media-id', media.id)

    return <div id="MediaViewerModal" tabIndex="-1" aria-hidden="true" aria-label="image closeup view" aria-modal="true">
        <div className="azeazeaea">
            <h1>. . . Bonjour . . .</h1>

            <button className="button-svg btn-close d-flex" data-bs-dismiss="modal" aria-label="Close Contact form">
                <CloseSVG/>
            </button>

            <div className="back-arrow">
                <ArrowSVG/>
            </div>

            <div className="next-arrow">
                <ArrowSVG/>
            </div>
        </div>
    </div>
}

export default MediaViewer

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        $('#MediaViewerModal').removeClass('show')
    }
});
