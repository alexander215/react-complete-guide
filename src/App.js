import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );

    // Alone, this code would render the message, but it considers h1 as text:
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!')
    
    // Nested create element is the same as the above JSX code:
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, null, 'Does this work now?'))
    // It's why we import React even if it doesn't appear to be used.
    // It is used when compiling
  }
}

export default App;
