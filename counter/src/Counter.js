
import React, { Component } from 'react';
 import Button from './Button'
class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0
            };
        
    }
    increment=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decrement=()=>{
        if(this.state.count <= 0){
            this.setState({
                count:0
            });
          }else {
            this.setState({
                count: this.state.count - 1
            });
          }
    }
    render(){

        return(
            <>
            <p>COUNTER: {this.state.count}</p>
            <Button title='increment ' ClickHandeler={this.increment} />
            <Button title=' decrement' ClickHandeler={this.decrement} />
            </>
        );
    }
}
export default Counter;
