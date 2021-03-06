import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import "fractures/dist/fractures.css";
// eslint-disable-next-line no-unused-vars
import styles from './styles/site.css';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/404';
import Shades from './components/shades';

if (module.hot) {
  require('react-devtools');
}

const routes = (
  <BrowserRouter basename={"kolor/#"}>
    <App>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/:color([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})" component={ Shades } />
        <Route component={ NotFound } />
      </Switch>
    </App>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
