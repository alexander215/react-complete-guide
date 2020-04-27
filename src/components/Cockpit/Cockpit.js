import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      // Http request...
      setTimeout(() => {
        alert('Saved data to cloud!')
      }, 1000)
      // Adding additional parameters causes this only to run when those variables changes:
      // }, [props.persons]);
      // If you only want it to run once and never again, pass an empty array:
    }, []);
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      // classes.push('red'); //classes = ['red']
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1){
      // classes.push('bold') // classes = ['red, 'bold']
      assignedClasses.push(classes.bold) // classes = ['red, 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          {/* <button 
            style={style}
            // This is the sytnax to use a function and pass an argument
            // onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
            onClick={this.togglePersonsHandler}> */}
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}> */}
          {/* <button className="button" onClick={this.togglePersonsHandler}> */}
          <button 
            className={btnClass} 
            onClick={props.clicked}>
            Toggle Persons
          </button>
        </div>
    );
};

export default cockpit;