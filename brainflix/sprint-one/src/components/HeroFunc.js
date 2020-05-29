// import React from "react";
// import HeroChild from "./HeroChild";

// class HeroFunc extends React.Component {
//   state = {
//     views: 1001023,
//     likes: 110985,
//   };

//   handleClick = (clickEvent) => {
//     clickEvent.preventDefault();
//     const formId = clickEvent.target.id;

//     console.log("Old State: ", this.state);
//     this.setState(
//       {
//         [formId]: this.state[formId] + 1,
//       },
//       () => {
//         console.log("New State: ", this.state);
//       }
//     );
//   };

//   render() {
//     return (
//       <>
//         <HeroChild
//           likeCount={this.state.likes}
//           viewCount={this.state.views}
//           handleClick={this.handleClick}
//         />
//       </>
//     );
//   }
// }

// export default HeroFunc;
