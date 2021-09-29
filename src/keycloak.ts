import Keycloak from "keycloak-js";
const _kc = Keycloak('/keycloak.json')

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback:any) => {
    _kc.init({
        onLoad: 'login-required'
    })
    .then((authenticated:boolean) => {
      // if (authenticated) {
        onAuthenticatedCallback();
      // } else {
      //   doLogin();
      // }
    })
};
const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

// const getAllInfo =jwt_decode<IToken>(token as string);
const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback:any) =>
    _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed;

// const hasRole = (roles:any) => roles.some((role:unknown) => _kc.hasRealmRole(role));

const KeyCloakService = {
    initKeycloak,
    doLogin,
    doLogout,
    // getAllInfo,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    // hasRole,
};

export default KeyCloakService;
