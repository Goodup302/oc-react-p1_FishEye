import React from "react";

import {ReactComponent as CloseSVG} from "../../../assets/svg/close.svg";

function ContactFrom(props) {

    const photographer = props.photographer
    console.log(photographer)


    function handleClose(e) {
        e.preventDefault();
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return <div className="modal fade" id="contactFormModal" tabIndex="-1" aria-labelledby="contactFormModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-body">
                    <form action="" id="contact-form">
                        <div className="d-flex">
                            <h1 className="pb-4" id="contactFormModalLabel">Contact me {photographer.name}</h1>
                            <div className="">
                                <button className="button-svg btn-close d-flex" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close Contact form">
                                    <CloseSVG/>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="your_message">Your message</label>
                            <textarea id="your_message" name="your_message"/>
                        </div>

                        <div className="d-flex justify-content-center justify-content-md-start">
                            <button className="button button-lite mt-5" onClick={handleSubmit}>send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default ContactFrom
