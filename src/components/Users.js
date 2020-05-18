import React from "react";
import UserLists from "./UserLists";
// import Moment from "react-moment";
// import "moment-timezone";

// array of data to loop through
class Users extends React.Component {
  state = {
    userLists: [
      {
        name: "Micheal Lyons",
        date: new Date("2018-12-18").toString(),
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
      {
        name: "Gary Wong",
        date: new Date("2018-12-12").toString(),
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
      {
        name: "Theodore Duncan",
        date: new Date("2018-11-15").toString(),
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
    ],
  };

  render() {
    return (
      <div className="UserList">
        <UserLists userLists={this.state.userLists} />
      </div>
    );
  }
}
export default Users;
