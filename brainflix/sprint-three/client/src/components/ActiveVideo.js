import React from "react";
import CommentForm from "./CommentForm";
import moment from "moment";

export default class ActiveVideo extends React.Component {
  constructor(props) {
    super(props);
    //Create Refs to video and playback controls to connect node element data and event code
    this.fsRef = React.createRef();
    this.vidRef = React.createRef();
    this.playRef = React.createRef();
    this.seekRef = React.createRef();
    this.muteRef = React.createRef();
    this.volRef = React.createRef();
  }
  //create state for volume and video playback time
  state = {
    volume: 1,
    playback: 0,
    currentTime: 0,
  };

  //Play and pause video on play button press
  PlayClickHandle() {
    if (this.vidRef.current.paused === true) {
      // Play the video
      this.vidRef.current.play();
      // Update the button image to 'pause'
      this.playRef.current.src = require("./../assets/Icons/PNG/Icon-pause.png");
    } else {
      // Pause the video
      this.vidRef.current.pause();
      // Update the button image to 'play'
      this.playRef.current.src = require("./../assets/Icons/PNG/Icon-play.png");
    }
  }

  //Mute or unmute video audio on button press
  MuteClickHandle() {
    if (this.vidRef.current.muted === false) {
      // Mute the video
      this.vidRef.current.muted = true;
    } else {
      // Unmute the video
      this.vidRef.current.muted = false;
    }
  }

  //Enter or exit full screen on button press
  FullScreenClickHandle() {
    //check browser and run associated full screen function
    if (this.vidRef.current.requestFullscreen) {
      this.vidRef.current.requestFullscreen();
    } else if (this.vidRef.current.mozRequestFullScreen) {
      this.vidRef.current.mozRequestFullScreen(); // Firefox
    } else if (this.vidRef.current.webkitRequestFullscreen) {
      this.vidRef.current.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  //Update volume on slider change event
  VolumeChangeHandle() {
    this.setState({
      volume: this.volRef.current.value,
    });
    //set volume to current state
    this.vidRef.current.volume = this.state.volume;
  }

  //Update playback position on slider change event
  ProgressChangeHandle() {
    //set playback state to slider value
    this.setState({
      playback: this.seekRef.current.value,
    });
    //calculate time based on total duration of video times the current slider value divided by max slider value
    let time = this.vidRef.current.duration * (this.state.playback / 100);
    // Update the video time
    this.vidRef.current.currentTime = time;
  }

  //Update the playback slider position based off of the videos current time using onTimeUpdate event
  TimeUpdateHandle() {
    // Calculate the slider value
    let value =
      (100 / this.vidRef.current.duration) * this.vidRef.current.currentTime;
    // Update the slider value
    console.log(value);
    //update time counter to currenttime
    this.setState({
      currentTime: this.vidRef.current.currentTime,
      playback: value,
    });
  }

  //Pause video playback when mouse is pressed
  ProgressMouseDownHandle() {
    this.vidRef.current.pause();
  }

  //Resume video playback when mouse is lifted
  ProgressMouseUpHandle() {
    this.vidRef.current.play();
  }

  render() {
    if (this.props.video.comments === undefined) {
      return <p>LOADING</p>;
    }
    return (
      <>
        <div className="active-video">
          <video
            className="active-vid__img"
            src={this.props.video.video}
            alt={this.props.video.title}
            poster={this.props.video.image}
            id="video"
            ref={this.vidRef}
            onTimeUpdate={this.TimeUpdateHandle.bind(this)}
          />
          <div id="video-controls">
            <button
              id="play"
              type="button"
              data-state="play"
              onClick={this.PlayClickHandle.bind(this)}
            >
              <img
                ref={this.playRef}
                src={require("./../assets/Icons/PNG/Icon-play.png")}
                alt=""
              />
            </button>
            <div className="progress">
              <div className="seek-bar-wrapper">
                <input
                  type="range"
                  id="seek-bar"
                  ref={this.seekRef}
                  value={this.state.playback}
                  onChange={this.ProgressChangeHandle.bind(this)}
                  onMouseDown={this.ProgressMouseDownHandle.bind(this)}
                  onMouseUp={this.ProgressMouseUpHandle.bind(this)}
                />
                <span className="current-time">
                  {/* round curret time to nearest integer */}
                  {Math.round(this.state.currentTime)} /{" "}
                </span>
                <span className="duration">{this.props.video.duration}</span>
              </div>

              <button
                id="fs"
                ref={this.fsRef}
                onClick={this.FullScreenClickHandle.bind(this)}
                type="button"
                data-state="go-fullscreen"
              >
                <img
                  src={require("./../assets/Icons/PNG/Icon-fullscreen.png")}
                  alt=""
                />
              </button>
              <div className="volume-wrp">
                <button
                  id="muteButton"
                  ref={this.muteRef}
                  onClick={this.MuteClickHandle.bind(this)}
                  type="button"
                  data-state="volup"
                >
                  <img
                    src={require("./../assets/Icons/PNG/Icon-volume.png")}
                    alt=""
                  />
                </button>
                <input
                  type="range"
                  id="volume-bar"
                  ref={this.volRef}
                  min="0"
                  max="1"
                  step="0.1"
                  onChange={this.VolumeChangeHandle.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="main__inf">
          <div className="active-video__txt-wrp">
            <h1 className="active-vid__title header">
              {this.props.video.title}
            </h1>
            <div className="activ-vid__inf">
              <div className="activ-vid__nameDate">
                <h2 className="active-vid__channel subheader">
                  By {this.props.video.channel}
                </h2>
                <h2 className="active-vid__date subheader">
                  {moment(this.props.video.timestamp).format("MM/DD/YYYY")}
                </h2>
              </div>
              <div className="views-likes__wrp">
                <img
                  className="views__icon"
                  src={require("./../assets/Icons/PNG/Icon-views.png")}
                  alt="icon"
                />
                <h2 className="active-vid__views subheader">
                  {this.props.video.views}
                </h2>
                <img
                  className="likes__icon"
                  src={require("./../assets/Icons/PNG/Icon-likes.png")}
                  alt="icon"
                />
                <h2 className="active-vid__likes subheader">
                  {this.props.video.likes}
                </h2>
              </div>
            </div>

            <p className="active-vid__desc paragraph">
              {this.props.video.description}
            </p>
          </div>
          <div>
            <CommentForm />
            {this.props.video.comments.map((comment) => (
              <div className="conversation__wrapper ">
                <div>
                  <img
                    className="users__icon"
                    src={require("../assets/Icons/PNG/usericon-grey.png")}
                    alt="icon"
                  />
                </div>
                <div className="conversation__container">
                  <div className="conversation__info">
                    <h2 className="conversation__username subheader">
                      {comment.name}
                    </h2>
                    <h2 className="conversation__date subheader">
                      {moment(comment.timestamp).format("MM/DD/YYYY")}
                    </h2>
                  </div>
                  <p className="conversation__usercomment paragraph">
                    {comment.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
