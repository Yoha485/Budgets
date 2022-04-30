import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/redux/index';
import { Provider } from 'react-redux';
import { ModalProvider } from 'styled-react-modal';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ModalProvider>
          <App />
        </ModalProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
