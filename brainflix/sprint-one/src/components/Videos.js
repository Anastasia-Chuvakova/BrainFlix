import React from "react";
import VideoGrid from "./VideoGrid";
import ActiveVideo from "./ActiveVideo";
//import VideoLists from "./VideoLists";
import axios from "axios";

class Videos extends React.Component {
  state = {
    activeVideo: null,
    videoLists: [
      {
        id: "0",
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "By Red Cow",
        image: require("../assets/Images/video-list-0.jpg"),
        views: "1001023,",
        likes: "110985",
        duration: "type of <string>",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "12/18/2018",
        comments: "type of <array>",
      },
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lesson",
        description: "description 0",
        channel: "Scotty Cranmer",
        image: require("../assets/Images/video-list-1.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },

      {
        id: "2",
        title: "Les Houches The Hidden Gem Of The…",
        description: "description 2",
        channel: "Scotty Cranmer",
        image: require("../assets/Images/video-list-2.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "3",
        title: "Travel Health Useful Medical Information…",
        description: "description 3",
        channel: "Scotty Cranmer",
        image: require("../assets/Images/video-list-3.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "4",
        title: "Cheap Airline Tickets Great Ways To Save",
        description: "description 4",
        channel: "Emily Harper",
        image: require("../assets/Images/video-list-4.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "5",
        title: "Take A Romantic Break In A Boutique Hotel",
        description: "description 5",
        channel: "Ethan Owen",
        image: require("../assets/Images/video-list-5.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "6",
        title: "Choose The Perfect Accommodations",
        description: "description 6",
        channel: "Lydia Perez",
        image: require("../assets/Images/video-list-6.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        description: "description 7",
        channel: "Timothy Austin",
        image: require("../assets/Images/video-list-7.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        description: "description 8",
        channel: "Scotty Cranmer",
        image: require("../assets/Images/video-list-8.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: require("../assets/Video/BrainStation Sample Video.mp4"),
        timestamp: "1589576704",
        comments: "type of <array>",
      },
    ],
  };
  componentDidMount() {
    const paramId = this.props.match.params.id;
    if (paramId === undefined) {
      this.setActiveVideo(0);
    } else {
      this.setActiveVideo(paramId);
    }
  }
  // method to update state
  setActiveVideo = (id) => {
    if (id === undefined) {
      this.setState({ activeImage: 0 });
    } else {
      this.setState({ activeImage: Number(id) });
    }
  };
  //ASK MORE QUESTIONS ABOUT BELOW ....
  // runs on update e.g. setState() watch out for infinite loops!
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id;
    const newId = this.props.match.params.id;

    if (this.props.match.params.id === undefined) {
      console.log("this.props.match.params.id", this.props.match.params.id);
    }

    if (newId !== oldId) {
      this.setActiveImage(newId);
    }
  }

  render() {
    return (
      <div className="Video">
        <main className="video__main">
          <ActiveVideo video={this.state.videoData[this.state.activeVideo]} />

          <VideoGrid
            videoData={this.state.videoData}
            handleVideoClick={this.handleVideoClick}
            activeVideo={this.state.activeVideo}
            routerProps={this.props}
          />
        </main>
        {/* //<h5 className="side__labels labels ">next video</h5>
        //<VideoLists videoLists={this.state.videoLists} /> */}
      </div>
    );
  }
}

export default Videos;

// //by default set the current video to the first object
// let mainVideoIndex = 0;
// let mainVideo = videoData[mainVideoIndex];
// //let the list equal all of the videos
// let videoList = videoData;
// //remove the main video from the video list
//videoList.splice(mainVideoIndex, 1);
