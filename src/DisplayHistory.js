import React from 'react';
import './index.css';

class DisplayHistory extends React.Component{
    render(){        
        const print = this.props.store.expression.join('');
        return(
            <input className = "displayHistory" type = "text" readOnly value={print}/>
        );
    }
}

export default DisplayHistory;