import React from "react";
import FishEyeLogo from "../elements/FishEyeLogo";
import {ReactComponent as LikeSVG} from "../../assets/svg/like.svg";

import {fishEyeData} from "../../index";
import EntryPhotographer from "../elements/EntryPhotographer";
import CardMedia from "../elements/card/CardMedia";

function SinglePhotographer(props) {

    const photographerId = props.match.params.photographerId
    const photographer = fishEyeData.getPhotographer(photographerId);
    const totlaLikes = fishEyeData.getPhotographerLike(photographerId)

    return <main id="main" className="SinglePhotographer container">
        <div className="row mt-10 mb-20">
            <div className="col-12 mb-8">
                <FishEyeLogo/>
            </div>
            <EntryPhotographer photographer={photographer}/>
        </div>
        <div className="row row-media" id="content">
            {fishEyeData.getMediaByPhotographer(photographerId).map((media, i) =>
                <div key={i} className="col-md-6 col-lg-4 mb-2" >
                    <CardMedia media={media} />
                </div>
            )}
        </div>

        <div className="static-informations d-flex justify-content-between px-7 py-4">
            <span>{totlaLikes} <LikeSVG/></span>
            <span>{photographer.price}$ / Day</span>
        </div>
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
