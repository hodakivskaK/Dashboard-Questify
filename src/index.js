import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {ToasterStyle} from './components/Toaster/ToasterStyle'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/Dashboard-Questify">
                <ToasterStyle />
                <App />
          </BrowserRouter>
         </PersistGate>
         </Provider>

  </React.StrictMode>
);