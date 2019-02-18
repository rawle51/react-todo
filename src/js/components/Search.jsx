import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 20px auto;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

const StyledLabel = styled.label`
  color: rgb(48, 47, 47);
  text-transform: uppercase;
  font-weight: bold;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  margin-right: 35px;
  width: 70%;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const search = e.target.value;
    this.setState({ search });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search.toLowerCase();
    if(this.props.filter !== 'ALL') {
      this.props.clearFilter('ALL');
    }
    this.props.onSearch(search);
    this.setState({ search: ''});
  }

  handleClear() {
    if(this.state.search) {
      this.props.onSearch('');
      this.setState({ search: ''});
    } 
    this.props.onSearch('');
  }

  render() {
    return(
      <Container>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledLabel htmlFor="search">Search:</StyledLabel>
          <StyledInput type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
          
        </StyledForm>
        <button className="link link--shadow" type="text" onClick={this.handleClear}>clear</button>
      </Container>
    );
  }
}

export default Search;