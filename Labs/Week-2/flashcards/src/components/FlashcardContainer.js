import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";
import axios from "axios";

class FlashcardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    console.log("calling componentDidMount")
    // axios.get(CLIENT_URL)
    //   .then((response) => {
    //     console.log(response)
    //     this.setState( {
    //       flashcards: response.data
    //     })
    //   })
    fetch(CLIENT_URL) 
      .then(response => {
        console.log(response.json());
        // return response.json()
      })
      .then(data => {
        console.log("data", data)
        this.setState({
          flashcards: data
        })
      })
  }

  render() {
    console.log("redering component");
    const {flashcards, currentIndex} = this.state;
    const cardDetail = flashcards[currentIndex];
    let card ;

    if(cardDetail) {
      card = <Flashcard detail={cardDetail} />
    }
    return (
      <div>
        {card}
      </div>
    )
  }
}

export default FlashcardContainer;
