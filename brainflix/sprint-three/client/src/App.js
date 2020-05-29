import React, { Component } from "react";
import Header from "./components/Header";

import Videos from "./components/Videos";
//import VideoPLayerPage from "./components/pages/VideoPLayerPage";
import VideoUploadPage from "./components/pages/VideoUploadPage";
import VideoDetailsPage from "./components/pages/VideoDetailsPage";
//import Home from "./components/pages/HomePage";
import "./assets/Video/BrainStation Sample Video.mp4";
import "./styles/styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Videos} exact />
          <Route path="/videos" component={Videos} exact />
          <Route path="/video-details" component={VideoDetailsPage} exact />
          <Route path="/videos/:id" component={Videos} />
          <Route path="/upload" component={VideoUploadPage} />
           
        </Switch>
      </Router>
    );
  }
}
export default App;
