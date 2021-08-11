
import { Provider } from 'react-redux';
import { TestScreen } from './components/TestScreen';
import { store } from './store';
function App() {
  
  return (
    <Provider store={store}>
        <TestScreen />
    </Provider>
  );
}

export default App;
