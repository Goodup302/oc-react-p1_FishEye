import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
