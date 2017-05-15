/**
 * Created by rongzhx on 2017/5/12 0012.
 */
import React from "react";
import ReactDOM from "react-dom";

class Person extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                {this.props.children}
            </div>
        )
    }
}

function HelloWorld(props){
    return <div>Hello {props.name}</div>;
}

const MyComp = React.createClass({
   render(){
       return <div>Hello World</div>;
   }
});

ReactDOM.render(
    <Person name='rongzhx' age='25'>
        <HelloWorld name='rongzhx'/>
        <MyComp/>
    </Person>,
    document.getElementById('app')
);