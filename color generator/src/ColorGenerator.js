import React, { Component } from 'react';
import './App.css';

class ColorGenerator extends Component {
    constructor() {
        super();
        this.state = {
          counter: 0,
          buttonColor: 'blue',
        };
      }
      incrimentCounter = () => {
        this.setState({ counter: "#" + Math.random().toString(16).substr(-6)});
      };
    
    
      render() {
        return (
            <>
            <div className='b' style={ {backgroundColor: this.state.counter}}>
            </div>
            <text >
              {this.state.counter} 
            </text>
            <button    onClick={this.incrimentCounter}>Add color</button>
          
          </>
        );
      }
    }
    
export default ColorGenerator
