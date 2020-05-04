import React from 'react';
import './index.css'

class Display extends React.Component{
    
    render(){
        let print = '';
        if(this.props.printThis === 'result'){
            print = this.props.store.result;
        }
        if(this.props.printThis === 'operand'){
            print = this.props.store.operand;
        }
        return(
            <input className="display" type="text" autoFocus value={print} onKeyDown = {(e)=> this.props.onType(e, this.props.store)}></input>
        );
    }
}

export default Display;