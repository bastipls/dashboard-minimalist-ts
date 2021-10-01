import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import KeyCloakService from './keycloak';

const render = () => {ReactDOM.render(
  
  // <React.StrictMode>
        <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)}
KeyCloakService.initKeycloak(render)

