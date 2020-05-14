import React from "react";
import HeroChild from "./HeroChild";

class HeroFunc extends React.Component {
  state = {
    likes: 110985,
  };
  handleClick = (clickEvent) => {
    clickEvent.preventDefault();
    const formId = clickEvent.target.id;

    console.log("Old State: ", this.state);
    this.setState(
      {
        [formId]: this.state[formId] + 1,
      },
      () => {
        console.log("New State: ", this.state);
      }
    );
  };

  render() {
    return (
      <>
        <HeroChild count={this.state.likes} handleClick={this.handleClick} />
      </>
    );
  }
}

export default HeroFunc;
