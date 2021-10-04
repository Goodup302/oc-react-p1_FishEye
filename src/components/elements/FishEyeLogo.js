import React from "react";
import {Link} from "react-router-dom";
import logoSite from "../../assets/svg/fisheye.svg";

function FishEyeLogo(props) {
    return <Link to={'/'}>
            <img src={logoSite} alt="Logo of website fisheye"/>
    </Link>
}

export default FishEyeLogo
