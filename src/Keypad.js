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
                <Equal store={this.props.store} onClick={this.props.onClick}/>
                <Buttons store={this.props.store} onClick={this.props.onClick}/>
            </>
        );
    }
}

export default Keypad;