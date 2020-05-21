import React from "react";
import Videos from "./../Videos";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Match,
} from "react-router-dom";

/* <Videos /> */

class Home extends React.Component {
  render() {
    const { match } = this.props;
    //   const paramId = this.props.match.params.id;
    //   console.log(paramId);
    return (
      <div className="homePage">
        <h1>Home Page</h1>
        <p>About this video app</p>
      </div>
    );
  }
}
export default Home;

// class Home extends React.Component {
//   render() {
//     const { match } = this.props;
//     //   const paramId = this.props.match.params.id;
//     //   console.log(paramId);
//     return (
//       <div className="homePage">
//         <h1>Home Page</h1>
//         <p>About this video app</p>
//         <Videos />
//         <Link to={match.url + "/video"}>videos</Link>
//         <Switch>
//           <Route path={match.path + "/video"} />
//         </Switch>
//       </div>
//     );
//   }
// }
// export default Home;
