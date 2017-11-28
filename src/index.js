import React from 'react';
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js";
import Life from "./Components/Life/Life.js";
// if we have the term export before the term class then when we import it has be in {}
import { Grocery }from "./Components/Grocery/Grocery.js";
import {Home} from "./Components/Home";
import {Header} from "./Components/Header";
import { render } from 'react-dom';



let user = {first_name: "Puneeth", last_name: "Gandla", age: 7}
class App extends React.Component{

    constructor(){
        super();
        this.state={
            homeLink:"Home"
        }
    }

    // this method is to learn how a child component can pass data or action to the parent component
    onGreet(){
        alert("hello Seetha")

    }

    // this method is to learn how two child components interact through parent
    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        })
    }
    render(){
        
        return(
            
            <div>
                < Grocery/>

                {/* these are the props I am passing from APP to home component */}
                <Home name={'shrutha'} age={3} user={user} changeLink={this.onChangeLinkName.bind(this)} greet={this.onGreet}>
                <p>This is a paragraph from App Component</p>
                </Home>
                <Header homeLink ={this.state.homeLink}/>
                </div>
        )
    }
}

// export default App;

render(<App />, document.getElementById('main'));
