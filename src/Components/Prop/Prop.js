import React from 'react';
class Prop extends React.Component{
    constructor(props){
        super(props)
        this.name = `${this.props.user.first_name} ${this.props.user.last_name}`
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.name}</h1>
                <h3>{this.props.user.age} years old</h3>
            </div>
        )
    }
}
export default Prop;