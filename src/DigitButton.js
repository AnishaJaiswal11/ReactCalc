import React from 'react';
import './index.css';

class DigitButton extends React.Component{
    constructor(props){
        super(props);
        this.handleDigitButtonClick = this.handleDigitButtonClick.bind(this);
    }

    handleDigitButtonClick() {
        const {store, value, changeStoreState} = this.props;

        if(store.operator === ""){
            if(store.result.toString().includes('.') && value === '.') return;
            changeStoreState({operand : ''});
            changeStoreState({result : ((store.result) ? store.result + value : value)});
        }
        else{
            if(store.operand.toString().includes('.') && value === '.') return;
            changeStoreState({operand : store.operand + value})
        }
    }
    render(){       
        return(
            <button className='keypadButton' onClick={this.handleDigitButtonClick} type="button" value={this.props.value}>{this.props.value}</button>
        );
    }
}

export default DigitButton;