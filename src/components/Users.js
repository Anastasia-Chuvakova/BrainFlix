import React from "react";
import UserLists from "./UserLists";
import Videos from "./Videos";

// array of data to loop through
class Users extends React.Component {
  state = {
    userLists: [
      {
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
      {
        name: "Gary Wong",
        date: "12/12/2018",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
      {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        image: require("../assets/Icons/PNG/usericon-grey.png"),
      },
    ],
  };

  render() {
    const self = this;

    function displayComment(event) {
      event.preventDefault();
      console.log("HELP");

      var commentTextVal = event.target.commentText.value;
      console.log(commentTextVal);
      console.log(self.state.userLists);

      //create formatted date
      let commentDate = new Date();
      commentDate =
        (commentDate.getMonth() > 8
          ? commentDate.getMonth() + 1
          : "0" + (commentDate.getMonth() + 1)) +
        "/" +
        (commentDate.getDate() > 9
          ? commentDate.getDate()
          : "0" + commentDate.getDate()) +
        "/" +
        commentDate.getFullYear();

      let newComment = {
        comment: commentTextVal,
        date: commentDate.toString(),
        image: require("../assets/Icons/PNG/usericon-grey.png"),
        name: "Anonymous",
      };
      console.log(newComment);

      self.setState((prevState) => ({
        userLists: [newComment, ...prevState.userLists],
      }));
      console.log(self.state.userLists);
    }

    return (
      <section className="comment-section">
        <div className="comment__wrapper">
          <h2 className="comment__subheader subheader">3 Comments</h2>

          <div className="comment__container">
            <div className="comment__icon">
              <img
                src={require("../assets/Icons/PNG/userico.png")}
                className="comment__icon"
                alt="img"
              />
            </div>
            <form className="comment__form" onSubmit={displayComment}>
              <div className="comment__form-left">
                <label className="comment__Label labels">
                  join the conversation
                </label>
                <input
                  className="comment__text"
                  placeholder="That was easily the most spectacular BMX moment ever."
                  name="commentText"
                ></input>
              </div>
              <div className="comment__form-right">
                <button className="comment__button" value="Submit">
                  comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="UserList">
          <UserLists userLists={this.state.userLists} />
        </div>
      </section>
    );
  }
}

export default Users;
