import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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