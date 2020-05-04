import React from 'react';
import DisplayHistory from './DisplayHistory';
import Display from './Display';
import Keypad from './Keypad';

class CalculatorFrame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            store : {
                result : 0,
                operand : '',
                operator : '',
                expression : [],
                printThis : 'result',
                flag : false,
            },
            keyDownEventObject : '',
        };

        this.onInput = this.onInput.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
        this.useOperator = this.useOperator.bind(this);
        this.onType = this.onType.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDigitButtonClick = this.handleDigitButtonClick.bind(this);
        this.handleOperationButtonClick = this.handleOperationButtonClick.bind(this);
    }

    onInput(partialState){
        console.log(partialState);
        const store = { ...this.state.store, ...partialState };
        this.setState({store: store}, ()=> console.log(`printThis=${this.state.store.printThis} result=${this.state.store.result} operand=${this.state.store.operand} operator=${this.state.store.operator} expression=${this.state.store.expression}`));
    }

    onCalculate(store){
        const result = this.useOperator(store.result, store.operand, store.operator);
        return result;
    }

    useOperator(operand1, operand2, operator){
        switch(operator){
            case '+': return +operand1 + +operand2;
            case '-': return +operand1 - +operand2;
            case '*': return +operand1 * +operand2;
            case '/': return +operand1 / +operand2;
        }
    }

    onType(e, store){
        e.preventDefault();
        const keyValue = e.key;
        console.log(keyValue);
        if(!isNaN(keyValue) || keyValue === '.'){
            this.handleDigitButtonClick(keyValue, store);
        }
        else if(keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/' ){
            this.handleOperationButtonClick(keyValue, store);
        }
        else if(keyValue === 'Enter'){
            this.handleOperationButtonClick("=", store);
        }
        return;
    }

    handleButtonClick(btnValue, store){
        if(!isNaN(btnValue) || btnValue === '.' ){
            this.handleDigitButtonClick(btnValue, store);
        }
        else{
            this.handleOperationButtonClick(btnValue, store);
        }        
    }

    handleDigitButtonClick(btnValue, store){

        if(store.operator === ''){
            if(store.result.toString().includes('.') && btnValue === '.') return;
            const {expression} = store.expression;
            this.onInput({operand : '',
                                result : ((store.result) ? store.result + btnValue : btnValue),
                                printThis : 'result',
                                
                        })    
        }
        else{
            if(store.operand.toString().includes('.') && btnValue === '.') return;
            this.onInput({operand : store.operand + btnValue, printThis : 'operand'});
        }
    }
    
    handleOperationButtonClick(btnValue, store){
        
        if(btnValue === 'AC'){
            this.onInput({result : 0, operand : '', operator : '', expression : [], printThis : 'result'});
            return;
        }
        if(btnValue === '='){
            if(store.operand){
                const res = this.onCalculate(store);
                this.onInput({result : res, operand : '', operator : '', printThis : 'result', expression : [],});
            }
            else{
                this.onInput({operand : '', operator : '', printThis : 'result', expression : [],});
            }
            return;
        }
        if(store.operator === ''){
            const {expression} = store;
            expression.push(store.result);
            this.onInput({operator : btnValue, expression : expression});
        }
        else{
            const res = this.onCalculate(store);
            const {expression} = store;
            expression.push(store.operator);
            expression.push(store.operand);
            this.onInput({result : res, operand : '', operator : btnValue, printThis : 'result'});
        }
    }

    render(){

        return(
                <>
                    <DisplayHistory store = {this.state.store}/>
                    <Display store={this.state.store} printThis = {this.state.store.printThis} onType = {this.onType}/>
                    <Keypad store={this.state.store} onClick = {this.handleButtonClick}/>
                </>
        );
    }
}

export default CalculatorFrame;