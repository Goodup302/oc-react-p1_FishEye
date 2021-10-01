import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./FishEyeData.json"
import "./assets/scss/app.scss"
import FishEyeData from "./FishEyeData";

export const fishEyeData = new FishEyeData(data)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//serviceWorker
window.onload = () => {
    if('serviceWorker' in  navigator) {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then(function(reg) {
                console.log('serviceWorker Registration succeeded');
            }).catch(function(err) {
            console.error('Registration failed with ' + err);
        })
    }
}
