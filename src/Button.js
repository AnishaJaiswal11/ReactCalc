import React from 'react';
import './index.css';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let clsName ='';
        if(this.props.btnType === 'digit'){
            clsName = 'keypadButton';
        }  
        else if(this.props.btnType === 'operation'){
            clsName = this.props.value ==='AC'? "ACButton" : "keypadButton operationButton";
        }    
        return(
            <button className={clsName} onClick={()=>this.props.onClick(this.props.value, this.props.store)} type="button" value={this.props.value}>{this.props.value}</button>
        );
    }
}

export default Button;