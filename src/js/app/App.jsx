import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StartPageContainer from '../containers/StartPageContainer.jsx';
import AppPage from './pages/AppPage.jsx';
import NotFound from './pages/NotFoundPage.jsx';

let title = null

if (window.localStorage) {
    try {
        title = localStorage.getItem('todoTitle')
    } catch (e) {
        // 
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: title
        }

        this.handleTitleAdd = this.handleTitleAdd.bind(this);
    }

    componentDidUpdate(_, prevState) {
        if (this.state.todoName && prevState.todoName !== this.state.todoName) {
            window.localStorage && localStorage.setItem('todoTitle', this.state.todoName)
        }
    }

    handleTitleAdd(title) {
        this.setState({
            todoName: title
        })
    }
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <StartPageContainer />} />
                        <Route path="/todo-list" render={() => <AppPage titleFromStorage={this.handleTitleAdd} store={this.props.store} title={this.state.todoName} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;