import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://login.api-ux.com/auth/',
  realm: 'Apiux',
  clientId: 'librux-react-app'
});
export default keycloak;
