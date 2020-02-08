// import React from 'react';
import React, { Component } from 'react';
import Person from './Person/Person';

// const persons = (props) => {
class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // DON'T USE THIS ONE ANYMORE
  // componentWillReceiveProps(props){
    //   console.log('[Persons.js] componentWillReceiveProps', props);
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Persons.js] shouldComponentUpdate');
      return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prev){
      console.log('[Persons.js] getSnapshotBeforeUpdate');
      return { message: 'Snapshot!' };
    }
    
  // DON'T USE THIS ONE ANYMORE
  // componentWillUpdate() {
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  render() {

    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      // return <ErrorBoundary key={person.id}>
      return <Person 
      click={() => this.props.clicked(index)} 
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)} />
      {/* </ErrorBoundary> */}
    });
  }
}
  
export default Persons;
