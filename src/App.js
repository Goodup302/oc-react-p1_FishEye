import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/templates/Home";
import NotFound from "./components/templates/NotFound";
import SinglePhotographer from "./components/templates/SinglePhotographer";
import MediaViewer from "./components/templates/MediaViewer";

function App(props) {
    return (
        <div className="App">
            <div className="print-hidden">
                <a className="button ancre" id="open-menu" href="#content">Skip to content</a>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tag/:tag" exact component={Home} />
                    <Route path="/photographer/:photographerId" exact component={SinglePhotographer} />
                    <Route path="/media/:mediaId/:photographerId" exact component={MediaViewer} />
                    <Route render={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
