import React, { Component } from 'react';

import './App.css';
import SearchBar from "./searchBar.js";
import ImageList from './imageList.js';
import splashApi from './splashApi.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        images : []
    }
}
  onSearchSubmit = async term => {
    const resp = await splashApi.get('/search/photos', {
      params: {query: term}
    });
    this.setState({images: resp.data.results});
  }
  render() {
    const { images } = this.state;
    return (
      <div className="ui container" style = {{ marginTop: '10px'}}>
          <SearchBar onSubmit = {this.onSearchSubmit} />
          <ImageList images = { images }/>
      </div>
    );
  }
  
}

export default App;
