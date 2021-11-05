import React from "react";
import Media from "./Media";
import Tag from "./Tag";
import $ from 'jquery'
import Modal from 'bootstrap/js/src/modal'

function EntryPhotographer(props) {
    const {photographer} = props

    function handleContactClick(e) {
        e.preventDefault();

        let myModal = new Modal($('#contactFormModal').get(0), {
            // keyboard: false
        })
        myModal.show()
    }

    return <div className="entry-photographer d-flex justify-content-between mb-10">
        <div style={{width: '100%'}}>
            <div className="align-items-center d-flex">
                <p className="name pb-1 pb-md-auto pe-lg-0 pe-lg-10 pe-xl-20">{photographer.name}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="button button-contact-me" aria-label='Contact me' onClick={handleContactClick}>
                    Contact me
                </a>
            </div>
            <p className="location pb-1 pb-md-4">{photographer.city}, {photographer.country}</p>
            <p className="tagline pb-1 pb-md-4">{photographer.tagline}</p>
            <div className="d-flex flex-wrap">
                {photographer.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
            </div>
        </div>
        <div className="d-flex align-items-center">
            <Media photographer={photographer} />
        </div>
    </div>
}

export default EntryPhotographer
