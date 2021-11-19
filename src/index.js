import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./FishEyeData.json"
import "./assets/scss/app.scss"
import FishEyeData from "./FishEyeData";
import GlobalState from "./GlobalState";
import $ from "jquery";

//Init FishEyeData Api ressoures
export const fishEyeData = new FishEyeData(data)

//Init state of app
export let AppState = new GlobalState()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//Event Jquery
$('a').on('keyup', function(e) {
    if( e.which === 9 ) {
        console.log( e.target.href );
    }
});



//serviceWorker
window.onload = () => {
    if('serviceWorker' in  navigator) {
        navigator.serviceWorker.register('/serviceWorker.js')
        .then(function(reg) {
            // console.log('serviceWorker Registration succeeded');
        }).catch(function(err) {
            console.error('Registration failed with ' + err);
        })
    }
}
