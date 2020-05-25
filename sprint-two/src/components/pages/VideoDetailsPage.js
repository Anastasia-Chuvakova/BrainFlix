import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class VideoDetailsPage extends React.Component {
  state = {
    currentVideo: {},
  };

  componentWillMount() {
    let videoId = window.location.href.toString();

    videoId = videoId.substr(videoId.lastIndexOf("=") + 1);

    let promise = axios.get(
      "https://project-2-api.herokuapp.com/videos/" +
        videoId +
        "/?api_key=03170a68-7fa6-4c3e-90db-528536e95c48"
    );
    promise
      .then((dataAPI) => {
        console.log("NEW DATA", dataAPI);

        this.setState({
          currentVideo: dataAPI.data,
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
  render() {
    return (
      <div className="video-details">
        <h1 className="header">{this.state.currentVideo.title}</h1>
        <h2 className="subheader">{this.state.currentVideo.channel}</h2>
        <p className="paragraph">{this.state.currentVideo.description}</p>
        <p>Views: {this.state.currentVideo.views}</p>
        <p>Likes: {this.state.currentVideo.likes}</p>
        <p>Duration: {this.state.currentVideo.duration}</p>
      </div>
    );
  }
}

export default VideoDetailsPage;
