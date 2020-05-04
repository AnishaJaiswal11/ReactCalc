import React from 'react';
import './index.css';

class DisplayHistory extends React.Component{
    render(){        
        return(
            <input className = "displayHistory" type = "text" readOnly/>
        );
    }
}

export default DisplayHistory;