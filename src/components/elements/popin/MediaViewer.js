import React from "react";
import {ReactComponent as CloseSVG} from "../../../assets/svg/close.svg";
import {ReactComponent as ArrowSVG} from "../../../assets/svg/arrow.svg";
import $ from "jquery";
import {AppState, fishEyeData} from "../../../index";
import Media from "../Media";

class MediaViewer extends React.Component{

    constructor(props) {
        super(props);
        // const photographer = props.photographer
        // const photographerId = AppState.getState("photographerId")
        // const medias = AppState.getState("medias")
        let currentMedia = AppState.getState("currentMedia")
        this.state = {
            media: currentMedia
        }
        // this.openMedia = this.openMedia.bind(this);

        this.modal = React.createRef();

        if (currentMedia) console.log(currentMedia)


        //Bind react event
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.onChangeMedia = this.onChangeMedia.bind(this)

        //Native event
        document.addEventListener('openMedia', this.open, false)
        document.addEventListener('changeMedia', this.onChangeMedia, false)

    }

    componentWillUnmount() {
        document.removeEventListener('openMedia', this.open);
        document.removeEventListener('changeMedia', this.onChangeMedia);
    }

    onChangeMedia(e) {
        this.setState({media:e.detail})
    }
    componentDidMount() {
        let _this = this
        //Event close modal with keyboard
        $(document).keyup(function(e) {
            if (e.key === "Escape") _this.close()
        });
    }



    //Navigation function
    open() {
        $(this.modal.current).addClass('show')
    }

    close() {
        $(this.modal.current).removeClass('show')
    }

    handleNext() {
        // const medias = AppState.getState("medias")
        // console.log(medias);
        //
        // let newMediaId = 0;
        // for (const [i, _media] of medias.entries()) {
        //     console.log(_media, media)
        //     if (_media.id === this.media.id) newMediaId = i + 1;
        // }
        //
        // const newMedia = fishEyeData.getMedia(newMediaId)
        // // console.log(newMedia)
        // setMedia(newMedia)
    }

    handlePrev() {
        // alert("handlePrev")
    }



    render() {
        const {media} = this.state
        return (
            <div id="MediaViewerModal" ref={this.modal} tabIndex="-1" aria-hidden="true" aria-label="image closeup view" aria-modal="true">
                <div className="mediaviewer-container">

                    <button className="button-svg btn-close d-flex" data-bs-dismiss="modal" aria-label="Close Contact form">
                        <CloseSVG onClick={this.handlePrev}/>
                    </button>

                    <div className="back-arrow" aria-label="“Previous image”">
                        <ArrowSVG onClick={this.handlePrev}/>
                    </div>

                    <div className="image-container">
                        {media &&
                        <>
                            <Media media={media} />
                            <span>{media.title}</span>
                        </>
                        }
                    </div>

                    <div className="next-arrow" aria-label="Next image">
                        <ArrowSVG onClick={this.handleNext}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaViewer



export function openMedia(media) {

    document.dispatchEvent(new Event('openMedia'))
    document.dispatchEvent(new CustomEvent('changeMedia', { detail: media }))


    AppState.setState("currentMedia", media)
}
