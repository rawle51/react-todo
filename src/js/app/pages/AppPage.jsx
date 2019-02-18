import React from 'react';

import HeaderContainer from '../../containers/HeaderContainer.jsx';
import TaskListContainer from '../../containers/TaskListContainer.jsx';
import FormContainer from '../../containers/FormContainer.jsx';
import SearchContainer from '../../containers/SearchContainer.jsx';
import FilterContainer from '../../containers/FilterContainer.jsx';
import Footer from '../../components/Footer.jsx';


class AppPage extends React.Component {

    render() {
        return(
            <main className="todo">
                <HeaderContainer />
                <FilterContainer />
                <SearchContainer />
                <TaskListContainer />
                <FormContainer />
                <Footer />
            </main> 
        );
    }
}

export default AppPage;