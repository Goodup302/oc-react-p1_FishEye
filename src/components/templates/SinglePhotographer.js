import React from "react";
import FishEyeLogo from "../elements/FishEyeLogo";
import {ReactComponent as LikeSVG} from "../../assets/svg/like.svg";
import {AppState, fishEyeData} from "../../index";
import EntryPhotographer from "../elements/EntryPhotographer";
import CardMedia from "../elements/card/CardMedia";
import ContactFrom from "../elements/popin/ContactForm";
import MediaViewer from "../elements/popin/MediaViewer";

function SinglePhotographer(props) {

    const photographerId = props.match.params.photographerId
    const photographer = fishEyeData.getPhotographer(photographerId);
    const totlaLikes = fishEyeData.getPhotographerLike(photographerId)
    const medias = fishEyeData.getMediaByPhotographer(photographerId)

    AppState.setState("photographerId", photographerId)
    AppState.setState("medias", medias)

    return <main id="main" className="SinglePhotographer container">
        <div className="row">
            <div className="col-12 mb-8 mt-6 px-4">
                <FishEyeLogo/>
            </div>
            <EntryPhotographer photographer={photographer}/>
        </div>
        <div className="row row-media" id="content">
            {medias.map((media, i) =>
                <div key={i} className="col-md-6 col-lg-4 mb-2" >
                    <CardMedia media={media} />
                </div>
            )}
        </div>

        <div className="static-informations d-flex justify-content-between px-7 py-4">
            <span>{totlaLikes} <LikeSVG/></span>
            <span>{photographer.price}$ / Day</span>
        </div>

        <ContactFrom photographer={photographer} />
        <MediaViewer data={medias} />
    </main>
}

export default SinglePhotographer


// "id": 342550,
// "photographerId": 82,
// "title": "Fashion Yellow Beach",
// "image": "Fashion_Yellow_Beach.jpg",
// "tags": ["fashion"],
// "likes": 62,
// "date": "2011-12-08",
// "price": 55
