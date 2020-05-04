import React from 'react';
import Button from './Button.js'
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
                    <Button store={this.props.store} value='AC' onClick={this.props.onClick} btnType='operation'></Button>
                </div>                
                <Button store={this.props.store} value='0' onClick={this.props.onClick} btnType='digit'></Button>
                <Button store={this.props.store} value='.' onClick={this.props.onClick} btnType='digit'></Button>
                {digitButtonsList.map((button,index) =>
                    <Button store={this.props.store} key={`left${index}`} value={button} onClick={this.props.onClick} btnType='digit'></Button>
                )} 
            </>
        );
    }

    renderRightKeyPad = () => {
        const operationButtonsList = ["+", "-", "*", "/"];
        return (
            operationButtonsList.map((button,index) =>
                <Button store={this.props.store} key={`right${index}`} value={button} onClick={this.props.onClick} btnType='operation'></Button>
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