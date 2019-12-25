import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, NotFound, Dashboard } from './pages';
import { Footer } from './components/Footer';
import { routes } from '../routes';
import { GlobalStyle } from './GlobalStyle';
import '../styles/main.scss';

// TODO rewrite ALL project within styled components library
// TODO write server and async function with loader to get tasks from server
// TODO add eslint airbnb config to project

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.todos} component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);

export default App;
