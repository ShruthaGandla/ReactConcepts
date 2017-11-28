import "./card.css";
import card from "./card.html";

class Card {
    constructor(){
        this.ele = document.createRange().createContextualFragment(card);
        this.buttonEvent();
        return this.ele;
    }
    buttonEvent(){
        this.ele.getElementById("mainButton").addEventListener('click', e => {
            console.log("I am clicking on the button");
        })
    }
}

export default function(){
    return new Card();
}