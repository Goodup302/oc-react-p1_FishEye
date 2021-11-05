import React from "react";

import {fishEyeData} from "../../index";
import Tag from "../elements/Tag";
import FishEyeLogo from "../elements/FishEyeLogo";

function Header(props) {
    const tags = fishEyeData.getAllTags();

    return <header>
        <div className="row align-items-center mt-lg-10 mb-lg-20 mt-6 mb-5">
            <div className="col-md-3 col-6 order-md-0">
                <FishEyeLogo/>
            </div>

            <div className="col-lg-5 col-md-6 col-12 order-md-1 order-2 pt-6 pt-md-0">
                <nav className="w-100 overflow-hidden" role="navigation" itemScope="" aria-label="photographer categories" itemType="http://schema.org/SiteNavigationElement">
                    <ul id="main-menu" className="d-flex flex-wrap justify-content-center justify-content-md-start">
                        {tags.map((tag, i) => <li key={i} className="">
                            <Tag name={tag}/>
                        </li>)}
                    </ul>
                </nav>
            </div>

            <div className="col-lg-4 col-md-3 col-6 text-center text-header order-md-2 order-1">
                <h1 tabIndex="0">Our Photographers</h1>
            </div>
        </div>
    </header>
}

export default Header
