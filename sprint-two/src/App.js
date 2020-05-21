import React, { Component } from "react";
import Header from "./components/Header";
//import Hero from "./components/Hero";
import Videos from "./components/Videos";
import VideoPLayerPage from "./components/pages/VideoPLayerPage";
import VideoUploadPage from "./components/pages/VideoUploadPage";
import Home from "./components/pages/HomePage";
import "./assets/Video/BrainStation Sample Video.mp4";
import "./styles/styles.css";
//import VideoLists from "./components/VideoLists";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1> simple spa</h1>
          <ul className="pages">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/videos">VideoPLayerPage</NavLink>
            </li>
            <li>
              <NavLink to="/upload">VideoUploadPage</NavLink>
            </li>
          </ul>
            
          <div className="content">
            <Route path="/" component={Videos} exact />
            <Route path="/videos" component={Videos} exact />
            <Route path="/videos/:id" component={Videos} />
            <Route path="/upload" component={VideoUploadPage} />
             
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
{
  /* // function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Switch>
//           <Route path="/home" exact component={Home} />
//           <Route path="/video" exact component={Home} />
//           <Route path="/video/:id" exact component={Home} />
//           <Route path="/videouploadpage" exact component={VideoUploadPage} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }



// <Route path="/" exact component={Videos} />
// <Route path="/video" exact component={Videos} />
// <Route path="/video/:id" exact component={Videos} />
// <Route path="/about" exact component={VideoUploadPage} />} */
}
