
import { Provider } from 'react-redux';
import { store } from './state';
// import { TestScreen } from './components/TestScreen';
// import { AdminLayout } from './layouts/AdminLayout';
import './assets/scss/styles.scss'
import { AppRouter } from './routers/AppRouter';

function App() {

 

  
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
}

export default App;
