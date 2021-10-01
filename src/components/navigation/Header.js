import React from "react";

import logoSite from "../../assets/svg/fisheye.svg"
import {fishEyeData} from "../../index";
import Tag from "../elements/Tag";

function Header(props) {
    const tags = fishEyeData.getAllTags();

    return <header>
        <div className="row mt-10 mb-20">
            <div className="col-md-3 text-center">
                <img src={logoSite} alt="Logo of website fisheye"/>
            </div>

            <div className="col-md-6">
                <nav className="w-100 overflow-hidden" role="navigation" itemScope="" aria-label="photographer categories" itemType="http://schema.org/SiteNavigationElement">
                    <ul id="main-menu" className="d-flex flex-wrap">
                        {tags.map((tag, i) => <li key={i} className="mx-1">
                            <Tag name={tag}/>
                        </li>)}
                    </ul>
                </nav>
            </div>

            <div className="col-md-3 text-center text-header">
                <h1>Our Photographers</h1>
            </div>
        </div>
    </header>
}

export default Header
