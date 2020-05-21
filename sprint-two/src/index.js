import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/fonts/AvenirNextProLT/Linotype - AvenirNextLTPro-Regular.otf";
import "./assets/fonts/AvenirNextProLT/Linotype - AvenirNextLTPro-Demi.otf";
import "./assets/fonts/AvenirNextProLT/Linotype - AvenirNextLTPro-Bold.otf";
import "./index.css";
//import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
//import Hero from "./components/Hero";
import Videos from "./components/Videos";
import VideoUploadPage from "./components/pages/VideoUploadPage";
import HomePage from "./components/pages/HomePage";
import "./assets/Video/BrainStation Sample Video.mp4";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// class UploadPage extends React.Component {
//   render() {
//     return (
//       <div className="homePage">
//         <h1>VIDEO</h1>
//         <p> this video app</p>
//         <Video />
//       </div>
//     );
//   }
// }
// class Home extends React.Component {
//   render() {
//     return (
//       <div className="homePage">
//         <h1>Home Page</h1>
//         <p>About this video app</p>
//         <Link to={math.url + "/VideoPlayerPage"}>Video Player Page</Link>
//         <Switch>
//           <Route path={match.path + "/VideoPlayerPage"} />
//         </Switch>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route path="/" exact component={HomePage} />
//       <Route path="/VideoPlayerPage" exact component={Videos} />
//       <Route path="/VideoUploadPage" exact component={Videos} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
