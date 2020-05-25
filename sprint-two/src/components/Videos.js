import React from "react";
import VideoGrid from "./VideoGrid";
import ActiveVideo from "./ActiveVideo";
import axios from "axios";

const API_KEY = "03170a68-7fa6-4c3e-90db-528536e95c48";
const SEARCH_URL = `https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`;

class Videos extends React.Component {
  state = {
    activeVideo: null,
    videoData: [],
    mainVideo: {},
  };

  componentDidMount() {
    const paramId = this.props.match.params.id;
    const promise = axios.get(`${SEARCH_URL}`);
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
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
        this.setState({ mainVideo: response.data });
      })

      .catch((err) => console.log(err));
  }

  setActiveVideo = (id) => {
    if (id === undefined) {
      this.setState({ activeVideo: 0 });
    } else {
      this.setState({ activeVideo: id });
    }
  };

  componentDidUpdate(prevProps) {
    console.log("prevProps component updated");

    const oldId = prevProps.match.params.id;

    const newId = this.props.match.params.id;
    console.log("new Id is ", newId);

    if (newId !== oldId) {
      this.setActiveVideo(newId);
      console.log("it is done");

      let promiseUpdate = axios.get(
        "https://project-2-api.herokuapp.com/videos/" +
          newId +
          "/?api_key=" +
          API_KEY
      );
      promiseUpdate.then((dataAPI) => {
        console.log("NEW DATA", dataAPI);
        this.setState({
          mainVideo: dataAPI.data,
        });
      });
    }
  }

  render() {
    return (
      <main className="video__main">
        <ActiveVideo video={this.state.mainVideo} />

        <div className="side__wrp">
          <VideoGrid
            videoData={this.state.videoData}
            handleVideoClick={this.handleVideoClick}
            activeVideo={this.state.activeVideo}
            routerProps={this.props}
          />
        </div>
      </main>
    );
  }
}

export default Videos;
