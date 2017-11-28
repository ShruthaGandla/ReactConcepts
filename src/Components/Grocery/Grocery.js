import React from 'react';

//components can be classes or functions.If it is a class we can have access to constructor and other life-cycel methods
export class Grocery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buyItems:[ 'milk','bread','fruit']

        }

    }

    render(){

       // destructuring 
        const {buyItems} = this.state;
        return (
            <div>
                <h1>Shopping List</h1>
                {
                    buyItems.map(item =>{
                        return <p key={item} >{item}</p>
                    })
                    }
                </div>
        )
    }
}