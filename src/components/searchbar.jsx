import React, { Component } from 'react';

class SearchBar extends Component {
  render = () => {
    // here you need to have a search bar that the user can type in. can't remember how to do that at all - a form?
    // then the information from the searchbar needs to be dynamically used to update the gifs array
    // think that the searchbar content will be a state?
    // and then sends the giphy query to the app? which can then create the list of gifs as an array, and send that to giflist as props?
    return (
      <input type="text" className="form-control form-search" />
      )
  }
}

export default SearchBar;
