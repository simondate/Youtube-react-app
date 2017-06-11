import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDqN076FXQZwpGS0H1a4Kj7-RP2xqzQFu0';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
