
import { Provider } from 'react-redux';
import { store } from './state';
// import { TestScreen } from './components/TestScreen';
// import { AdminLayout } from './layouts/AdminLayout';
import './assets/scss/styles.scss'
import { AppRouter } from './routers/AppRouter';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
function App() {

 
  const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error)
  }

  const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens)
  }
  
  return (
    <Provider store={store}>
      <ReactKeycloakProvider
          authClient={keycloak}
          onEvent={eventLogger}
          onTokens={tokenLogger}
          autoRefreshToken={true}
          // LoadingComponent={<Loading  />}
          // isLoadingCheck={(keycloak) => !keycloak.authenticated}
        >
        <AppRouter />
    </ReactKeycloakProvider>
    </Provider>
  );
}

export default App;
