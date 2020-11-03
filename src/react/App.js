import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer } from './components/Footer';
import { routes } from '../routes';
import { GlobalStyle } from './styles';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        {routes.map(({ component, path, exact }) => (
          <Route path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </Router>
    <Footer />
  </>
);
