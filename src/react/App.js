import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer } from './components/Footer';
import { routes } from '../routes';
import { GlobalStyle } from './styles';

// TODO write server and async function with loader to get tasks from server
// TODO add eslint airbnb config to project

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
