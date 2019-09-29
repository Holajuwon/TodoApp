import React, { Component } from "react";

class Likes extends Component {
  state = {
    Likes: 0
  };

  increaseLikes = () => {
    this.setState((prevState, prevProps) => {
      return {
        Likes: prevState.Likes < 5 ? prevState.Likes + 1 : (prevState.Likes = 5)
      };
    });
  };
  deccreaseLikes = () => {
    this.setState((prevState, prevProps) => {
      return {
        Likes:
          prevState.Likes > 0 ? (prevState.Likes -= 1) : (prevState.Likes = 0)
      };
    });
  };
  resetLikes = () => {
    this.setState((prevState, prevProps) => {
      return {
        Likes: (prevState.Likes = 0)
      };
    });
  };

  render() {
    return (
      <div>
        <h1> Welcome To My Likes App </h1>
        <button onClick={this.increaseLikes}> Like </button>
        <span> Likes: {this.state.Likes} </span>
        <button onClick={this.resetLikes}>reset</button>
        <button onClick={this.deccreaseLikes}>unlike</button>
      </div>
    );
  }
}

export default Likes;
