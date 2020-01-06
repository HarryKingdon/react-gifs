import React, { Component } from 'react';
import giphy from 'giphy-api';
const GIPHY_API_KEY = 'xeUi5zAd3KwWDw3swHfNnmpatPTI9h95';

import Gif from './gif';
import GifList from './giflist';
import SearchBar from './searchbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  search = (query) => {
    giphy({api_key: GIPHY_API_KEY, https: true})
      .search({
        q: query,
        limit: 10,
        rating: 'g'
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
      console.log(this.state.gifs)
  }

  render = () => {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <Gif id={''} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
