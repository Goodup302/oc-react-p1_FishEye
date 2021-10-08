import React from "react";

import {fishEyeData} from "../../index";
import Tag from "../elements/Tag";
import FishEyeLogo from "../elements/FishEyeLogo";

function Header(props) {
    const tags = fishEyeData.getAllTags();

    return <header>
        <div className="row mt-10 mb-20">
            <div className="col-xl-3">
                <FishEyeLogo/>
            </div>

            <div className="col-xl-5">
                <nav className="w-100 overflow-hidden" role="navigation" itemScope="" aria-label="photographer categories" itemType="http://schema.org/SiteNavigationElement">
                    <ul id="main-menu" className="d-flex flex-wrap">
                        {tags.map((tag, i) => <li key={i} className="">
                            <Tag name={tag}/>
                        </li>)}
                    </ul>
                </nav>
            </div>

            <div className="col-xl-4 text-center text-header">
                <h1 tabIndex="0">Our Photographers</h1>
            </div>
        </div>
    </header>
}

export default Header
