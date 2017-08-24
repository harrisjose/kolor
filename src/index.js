// inferno module
import { render } from 'inferno';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import App from './app';
import currentColor from './currentColor';

if (module.hot) {
    require('inferno-devtools');
}

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/:color" component={ currentColor } />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
