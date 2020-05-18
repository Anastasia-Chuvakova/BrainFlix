import React, { Component } from "react";
import MainVideoList from "./MainVideoList";

export class MainVideo extends React.Component {
  state = {
    mainVideoList: [
      {
        id: "1",
        title: "title 0",
        description: "description 0",
        channel: "channel 0",
        image: require("../assets/Images/video-list-0.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: "mp4",
        timestamp: "1589576704",
        comments: "type of <array>",
      },
    ],
  };

  render() {
    return (
      <div className="MainVideo">
        <MainVideoList mainVideoList={this.state.mainVideoList} />
      </div>
    );
  }
}

export default MainVideo;
