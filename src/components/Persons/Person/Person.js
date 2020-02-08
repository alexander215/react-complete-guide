import React, { Component } from 'react';
import './Person.css';
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
    
//         width: 450px;
//     }
// `;

// const person = (props) => {
class Person extends Component {
    render() {
    console.log('[Person.js] rendering...')
    // Simple, undynamic way of doing things:
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!!</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    // to show errors:
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');

    // }

    return (
        // <div className="Person" style={style}>
        // <StyledDiv>
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
            {/* Below is the less dynamic way to do this before having a key */}
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}
        </div>
        // </StyledDiv>
        // </div>
    )
};
}
export default Person;
// export default Radium(person);