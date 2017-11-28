import React from "react";
class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 10};
        this.renderOrder = 2;
        console.log("1. This is the constructor method. Always first");
        
    }
    componentDidMount(){
        console.log("3. componentDidMount method. Invoked immediataly after the first render runs.");
        this.countDown = setInterval(()=>{
            this.setState({count: this.state.count - 1})
        }, 1000)      
    }

    componentWillUpdate(nextProps, nextState){
        console.log("4. This runs right before the html is re-rendered, in this case right before state changes")
        if(this.renderOrder == 2){this.renderOrder = 5}
    }
    componentDidUpdate(prevProps, prevState){
        console.log("6. This runs right after the html is re-rendered, in this case right after state changes")
        if(this.state.count <= 0){
            clearInterval(this.countDown);
            console.log("7. Countdown Finished and state has interval has been stopped")
        }
    }
    render(){
        console.log(`${this.renderOrder}. This is the render method. Invoked after constructor and before state changes`);
        return (
            <h1>COUNT: {this.state.count}</h1>
        )
    }
}
export default Life;