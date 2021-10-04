import React from 'react';
import FishEyeLogo from "../elements/FishEyeLogo";

export default function NotFound(props) {
    return (
        <div className="container">
            <div className="row">
                <FishEyeLogo/>
                <h2>Page introuvable</h2>
            </div>
        </div>
    );
}
