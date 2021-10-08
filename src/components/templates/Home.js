import React from "react";
import CardPhotographer from "../elements/card/CardPhotographer";
import {fishEyeData} from "../../index";
import Header from "../navigation/Header";


function Home(props) {
    const tag = props.match.params.tag;
    const photographers = fishEyeData.getPhotographers(tag);

    return (
        <main id="main" className="container">
            <Header/>
            {photographers.length ?
                <div id="content" className="row">
                    {photographers.map((photographer, i) =>
                        <div key={i} className="col-md-6 col-lg-4 mb-15">
                            <CardPhotographer key={i} photographer={photographer}/>
                        </div>
                    )}
                </div>
                :
                <h2 className="text-center">This tag dowsn't contain photographer</h2>
            }
        </main>
    );
}

export default Home;
