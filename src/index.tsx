import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Loading } from './components/Loading';
import keycloak from './keycloak';

ReactDOM.render(
  
  <React.StrictMode>
   
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);


