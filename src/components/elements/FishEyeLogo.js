import React from "react";
import {Link} from "react-router-dom";
import logoSite from "../../assets/svg/fisheye.svg";

function FishEyeLogo(props) {
    return <Link to={'/'} id="logo-site">
            <img src={logoSite} alt="Fisheye Home page"/>
    </Link>
}

export default FishEyeLogo
