import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/404';
import Shades from './components/shades';

if (module.hot) {
  require('react-devtools');
}

const routes = (
  <BrowserRouter>
    <App>
      <Route path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/:color([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})" component={ Shades } />
      <Route path="*" component={ NotFound } />
    </App>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}
