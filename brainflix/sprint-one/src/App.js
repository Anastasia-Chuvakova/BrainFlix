import React from "react";
import Header from "./components/Header";
//import Hero from "./components/Hero";
import Videos from "./components/Videos";
import AboutPage from "./components/AboutPage";
import "./assets/Video/BrainStation Sample Video.mp4";
import "./styles/styles.css";
//import VideoLists from "./components/VideoLists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/image/:id" exact component={Videos} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
