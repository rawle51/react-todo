import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './react/layouts/Home';
import TodoDashboard from './react/layouts/TodoDashboard';
import NotFound from './react/layouts/NotFound';
import Footer from './react/components/Footer';
import './styles/main.scss';

// TODO rewrite ALL project within styled components library
// TODO create sepate routes file
// TODO write server and async function with loader to get tasks from server
// TODO add eslint airbnb config to project

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/todos" render={() => <TodoDashboard />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
