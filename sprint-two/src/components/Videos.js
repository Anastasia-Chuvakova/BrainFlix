import React from "react";
import VideoGrid from "./VideoGrid";
import ActiveVideo from "./ActiveVideo";
import axios from "axios";
//import VideoLists from "./VideoLists";
const API_KEY = "03170a68-7fa6-4c3e-90db-528536e95c48";
const SEARCH_URL =
  "https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}";
//const searchByVideoTitle = (searchKeyword) => `${SEARCH_URL}&s=${searchKeyword}`;
class Videos extends React.Component {
  state = {
    activeVideo: null,
    videoData: [],
  };

  componentDidMount() {
    const paramId = this.props.match.params.id;
    const promise = axios.get(
      "https://project-2-api.herokuapp.com/videos/?api_key=03170a68-7fa6-4c3e-90db-528536e95c48"
    );
    promise
      .then((dataAPI) => {
        this.setState((prevState) => ({
          videoData: [...dataAPI.data, ...prevState.videoData],
        }));
        if (paramId === undefined) {
          this.setActiveVideo(this.state.videoData[0].id);
        } else {
          this.setActiveVideo(paramId);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  // method to update state
  setActiveVideo = (id) => {
    if (id === undefined) {
      this.setState({ activeVideo: 0 });
    } else {
      this.props.match.params.id = id;
      this.setState({ activeVideo: id });
    }
  };

  //ASK MORE QUESTIONS ABOUT BELOW ....
  // runs on update e.g. setState() watch out for infinite loops!
  //componentDidUpdate(prevProps) {
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id;
    const newId = this.props.match.params.id;
    if (this.props.match.params.id === undefined) {
      console.log("this.props.match.params.id", this.props.match.params.id);
    }
    if (newId !== oldId) {
      this.setActiveVideo(newId);
    }
  }

  render() {
    return (
      <div className="Video">
        <main className="video__main">
          {/* <ActiveVideo video={this.state.videoData[this.state.activeVideo]} /> */}
          <ActiveVideo
            video={this.state.videoData.find((obj) => {
              return obj.id === this.props.match.params.id;
            })}
          />

          <VideoGrid
            videoData={this.state.videoData}
            handleVideoClick={this.handleVideoClick}
            activeVideo={this.state.activeVideo}
            routerProps={this.props}
          />
        </main>
      </div>
    );
  }
}
export default Videos;
