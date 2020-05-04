import React from 'react';
import './index.css';

class OperationButton extends React.Component{
    constructor(props){
        super(props);
        this.handleOperationButtonClick = this.handleOperationButtonClick.bind(this);
    }

    handleOperationButtonClick(){
        const {store, value, changeStoreState} = this.props;

        if(store.operator === ''){
            changeStoreState({operator : value});
        }
        else{
            console.log('about to call onCalculate');
            this.props.onCalculate();
            changeStoreState({operator : value});
        }
    }

    render(){
        const styleClass = this.props.value ==='AC'? "ACButton" : "keypadButton operationButton";
        
        return(
            <button className={styleClass} onClick={this.handleOperationButtonClick} type="button" value={this.props.value}>{this.props.value}</button>
        );
    }
}

export default OperationButton;