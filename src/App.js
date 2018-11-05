import React, { Component } from 'react';

import './App.css';
import MessageList from './components/MessageList';

class App extends Component {
  render() {
    return (
      <div>
        <MessageList />
      </div>
    );
  }
}

export default App;
