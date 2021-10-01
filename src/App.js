import React from "react";
import Header from "./components/navigation/Header";
import {fishEyeData} from "./index";
import CardPhotographer from "./components/elements/CardPhotographer";


function App() {
    const photographers = fishEyeData.getPhotographers();

    return (
        <div className="App">
            <Header/>

            <div className="row">
                {photographers.map((photographer, i) => <div className="col-md-6 col-lg-4 mb-15">
                    <CardPhotographer key={i} photographer={photographer} />
                </div>)}
            </div>
        </div>
    );
}

export default App;


// "id": 342550,
// "photographerId": 82,
// "title": "Fashion Yellow Beach",
// "image": "Fashion_Yellow_Beach.jpg",
// "tags": ["fashion"],
// "likes": 62,
// "date": "2011-12-08",
// "price": 55
