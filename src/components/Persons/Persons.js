// import React from 'react';
// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

// const persons = (props) => {
// class Persons extends Component {
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // DON'T USE THIS ONE ANYMORE
  // componentWillReceiveProps(props){
    //   console.log('[Persons.js] componentWillReceiveProps', props);
    // }
    
    // If checking everything, don't use this method, use PureComponent:
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log('[Persons.js] shouldComponentUpdate');
    //   if (nextProps.persons !== this.props.persons  || nextProps.change !== this.props.changed || nextProps.clicked !== this.props.clicked) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    
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

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
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
