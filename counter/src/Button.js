import React,{Component} from 'react';
// import Cunter from './Cunter';
class Button extends Component{   
    render(){
        return(
            <button onClick={this.props.ClickHandeler}>{this.props.title}</button>
        )
        
        };
       
      
};
export default Button ;