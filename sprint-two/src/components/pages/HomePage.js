import React from "react";
import Videos from "./../Videos";

function HomePage() {
  //   const paramId = this.props.match.params.id;
  //   console.log(paramId);
  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>About this video app</p>
      <Videos />
    </div>
  );
}

export default HomePage;
