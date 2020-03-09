import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleApp from './apps/App3';
import Calculator from './apps/Calculator';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<SimpleApp />, document.getElementById('root'));


//ReactDOM.render(<Calculator/>, document.getElementById('root'));

//What to render, Where To render
//in render Object we could write HTML too, but it doesnot make sence
//we just want to have Component based Applications



registerServiceWorker();
