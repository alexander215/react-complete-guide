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
      { id: 'ahrhwhdg', name: 'Max', age: 28 },
      { id: 'jetyjekg', name: 'Manu', age: 29 },
      { id: 'fhfdshhw', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // Adding the slice method makes a copy of the array - it's best practice
    // const persons = this.state.persons.slice();
    // More modern to use spread operator to add to new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  // Old click handler:
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked')
  //   // DON'T DO THIS: this.state.persons[0].name = "Maximillian";
  //   this.setState({
  //     persons: [
  //       { name: 'newName', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternate method to above:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* The list before mapping: */}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')} 
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          // This is the sytnax to use a function and pass an argument
          // onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
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