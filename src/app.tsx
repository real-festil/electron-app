import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Auth from './pages/Auth';
import 'antd/dist/antd.css';
import Articles from './pages/Articles';
import Article from './pages/Article';
import store from './store/store';
import '@babel/polyfill';
import 'regenerator-runtime/runtime.js';

const persistor = persistStore(store);

const mainElement = document.createElement(`div`);
document.body.appendChild(mainElement);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <div>
          <Route path="/" exact component={Auth} />
          <Route path="/articles" component={Articles} />
          <Route path="/article/:id" component={Article} />
        </div>
      </HashRouter>
    </PersistGate>
  </Provider>
);

ReactDom.render(<App />, mainElement);
