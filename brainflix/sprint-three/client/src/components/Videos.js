import React from "react";
import VideoGrid from "./VideoGrid";
import ActiveVideo from "./ActiveVideo";
import axios from "axios";

class Videos extends React.Component {
  state = {
    activeVideo: null,
    videoData: [],
    mainVideo: {},
  };

  componentDidMount() {
    console.log("PROPS", this.props);
    const paramId = this.props.match.params.id;
    const promise = axios.get(`/videos`);
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
      .get(`/videos/1af0jruup5gu`)
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

      let promiseUpdate = axios.get("/videos/" + newId);
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
