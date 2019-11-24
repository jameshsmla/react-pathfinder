import React from 'react';
import ReactDOM from 'react-dom';

//create component
const Welcome = <h1>Welcome!</h1>;

//Flush the component into Render engine

ReactDOM.render(Welcome, document.getElementById('root'))