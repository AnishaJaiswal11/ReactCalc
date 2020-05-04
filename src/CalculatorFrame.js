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
            }
        };
        console.log(this.state.store);
        this.changeStoreState = this.changeStoreState.bind(this);
        this.calculate = this.calculate.bind(this);
        this.useOperator = this.useOperator.bind(this);
    }

    componentDidUpdate(){
        console.log(`did update ${this.state.store.result}`);
    }

    changeStoreState(partialState){
        const store = { ...this.state.store, ...partialState };
        this.setState({store: store}, () => { console.log(`operand=${this.state.store.operand} operator=${this.state.store.operator} result=${this.state.store.result}`); });
        
    }

    calculate(){
       
        console.log(this.state.store.result, this.state.store.operand, this.state.store.operator);
        this.setState({store : {result : 222, operand : ''}}, () => {
            debugger;
            console.log(this.state.store.result);
        }    );    
    }

    useOperator(operand1, operand2, operator){
        switch(operator){
            case '+': return +operand1 + +operand2;
            case '-': return +operand1 - +operand2;
            case '*': return +operand1 * +operand2;
            case '/': return +operand1 / +operand2;
        }
    }

    render(){
        return(
                <>
                    <DisplayHistory/>
                    <Display/>
                    <Keypad store={this.state.store} changeStoreState={this.changeStoreState} onCalculate={this.calculate}/>
                </>
        );
    }
}

export default CalculatorFrame;