import React from 'react';
import DigitButton from './DigitButton.js'
import OperationButton from './OperationButton.js'
import './index.css'

class Buttons extends React.Component{
    constructor(props){
        super(props);
    }
    renderLeftKeyPad = () => {
        const digitButtonsList = ["1","2","3","4","5","6","7","8","9"];
        return (
            <>
                <div className="keypadButton ACDiv">
                    <OperationButton store={this.props.store} value='AC' changeStoreState={this.props.changeStoreState} onCalculate={this.props.onCalculate}></OperationButton>
                </div>                
                <DigitButton store={this.props.store} value='0' changeStoreState={this.props.changeStoreState}></DigitButton>
                <DigitButton store={this.props.store} value='.' changeStoreState={this.props.changeStoreState}></DigitButton>
                {digitButtonsList.map((button,index) =>
                    <DigitButton store={this.props.store} key={`left${index}`} value={button} changeStoreState={this.props.changeStoreState}></DigitButton>
                )} 
            </>
        );
    }

    renderRightKeyPad = () => {
        const operationButtonsList = ["+", "-", "*", "/"];
        return (
            operationButtonsList.map((button,index) =>
                <OperationButton store={this.props.store} key={`right${index}`} value={button} changeStoreState={this.props.changeStoreState} onCalculate={this.props.onCalculate}></OperationButton>
            )
        );
    }
    render(){
        
        return( 
            <div className='keypad'>
                <div className='leftKeypad'>
                    {this.renderLeftKeyPad()}
                </div>
                <div className='rightKeypad'>
                    {this.renderRightKeyPad()}
                </div>
            </div>
        );
    }
}
export default Buttons;