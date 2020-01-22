////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// SAME COMPONENT BUT USING CLASS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // DON'T DO THIS: this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: 'newName', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} 
          changed={this.nameChangedHandler}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// SAME COMPONENT BUT USING HOOKS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // import React, { Component } from 'react';
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });
  
//   const [otherState, setOtherState] = useState('Some other value')
//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//     // console.log('Was clicked')
//     // DON'T DO THIS: this.state.persons[0].name = "Maximillian";
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };


//   // render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person 
//           name={personsState.persons[0].name} 
//           age={personsState.persons[0].age} 
//         />
//         <Person 
//           name={personsState.persons[1].name} 
//           age={personsState.persons[1].age} >
//           My hobbies: Racing
//         </Person>
//         <Person 
//           name={personsState.persons[2].name} 
//           age={personsState.persons[2].age}
//         />
//       </div>
//     );

//     // Alone, this code would render the message, but it considers h1 as text:
//     // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!')
    
//     // Nested create element is the same as the above JSX code:
//     // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, null, 'Does this work now?'))
//     // It's why we import React even if it doesn't appear to be used.
//     // It is used when compiling
//   }
// // }

// export default app;


// // Removed from class-based component. 
// // Save for after using hooks.
// // state = {
// //   persons: [
// //     { name: 'Max', age: 28 },
// //     { name: 'Manu', age: 29 },
// //     { name: 'Stephanie', age: 26 }
// //   ],
// //   otherState: 'some other value'
// // }

// // switchNameHandler = () => {
// //   // console.log('Was clicked')
// //   // DON'T DO THIS: this.state.persons[0].name = "Maximillian";
// //   this.setState({
// //     persons: [
// //       { name: 'Maximilian', age: 28 },
// //       { name: 'Manu', age: 29 },
// //       { name: 'Stephanie', age: 27 }
// //     ]
// //   })
// // }