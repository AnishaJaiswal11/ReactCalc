import React from 'react';
import './index.css';

class Equal extends React.Component{
    render(){
        return(
            <button className="equal" onClick={() => this.props.onClick('=', this.props.store)} name="equals" type="button" value="=">=</button>
        );
    }
}

export default Equal;