import React from "react";
import CommentForm from "./CommentForm";
import Userlist from "./UserList";

// array of data to loop through
const userArr = [
  {
    name: "Micheal Lyons",
    date: new Date("2018-12-18").toString(),
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    usericon: (
      <img
        src={require("../assets/Icons/PNG/usericon-grey.png")}
        className="header__icon"
        alt="icon"
      />
    ),
  },
  {
    name: "Gary Wong",
    date: new Date("2018-12-12").toString(),
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    usericon: (
      <img
        src={require("../assets/Icons/PNG/usericon-grey.png")}
        className="header__icon"
        alt="icon"
      />
    ),
  },
  {
    name: "Theodore Duncan",
    date: new Date("2018-11-15").toString(),
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    usericon: (
      <img
        src={require("../assets/Icons/PNG/usericon-grey.png")}
        className="header__icon"
        alt="icon"
      />
    ),
  },
];

function Comments() {
  return (
    <div className="comments__wrapper">
      <CommentForm />
      <Userlist users={userArr} />
    </div>
  );
}

export default Comments;
