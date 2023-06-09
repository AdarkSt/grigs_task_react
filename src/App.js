import './App.css';
import {Provider} from 'react-redux'
import  { persistor, store } from './store/store';
import { ToDo } from './components/ToDo';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDo/>
      </PersistGate>
    </Provider>
  );
}

export default App;
