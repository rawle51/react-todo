import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer } from './components/Footer';
import { routes } from '../routes';
import { GlobalStyle } from './styles';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        {routes.map(({ component, path, exact, key }) => (
          <Fragment key={key}>
             <Route path={path} component={component} exact={exact} />
          </Fragment>
        ))}
      </Switch>
    </Router>
    <Footer />
  </>
);
