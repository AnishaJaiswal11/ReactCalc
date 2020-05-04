import React from 'react';
import Equal from './Equal.js';
import Buttons from './Buttons.js'

class Keypad extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Equal/>
                <Buttons store={this.props.store} changeStoreState={this.props.changeStoreState} onCalculate={this.props.onCalculate}/>
            </>
        );
    }
}

export default Keypad;