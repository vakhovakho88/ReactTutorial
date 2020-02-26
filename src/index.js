import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleApp from './apps/App1';
import registerServiceWorker from './registerServiceWorker';



//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<SimpleApp />, document.getElementById('root'));

//What to render, Where To render
//in render Object we could write HTML too, but it doesnot make sence
//we just want to have Component based Applications



registerServiceWorker();
