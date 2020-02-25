import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from "./searchBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        images : []
    }
}
  onSearchSubmit = async (term) => {
    const resp = axios.get('', {
      parmas: {query: term}
    });
  }
  render() {
    return (
      <div className="ui container" style = {{ marginTop: '10px'}}>
          <SearchBar onSubmit = {this.onSearchSubmit} />
      </div>
    );
  }
  
}

export default App;
