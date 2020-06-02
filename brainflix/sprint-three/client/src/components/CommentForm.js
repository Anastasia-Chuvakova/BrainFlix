import React from "react";
import axios from "axios";

// array of data to loop through
class CommentForm extends React.Component {
  state = {
    displayComment: {},
  };

  render() {
    function displayComment(event) {
      event.preventDefault();

      var commentTextVal = event.target.commentText.value;

      let newComment = {
        comment: commentTextVal,
        name: "Anonymous",
      };
      //would like to use params instead though was unable to access it
      //I am getting the window url and separating the last part with the video ID
      let videoId = window.location.href.toString();
      videoId = videoId.substr(videoId.lastIndexOf("/") + 1);

      //post new comment object to the api using video ID
      axios({
        method: "post",
        url: "/videos" + videoId + `{comments}`,
        // url:
        //   "https://project-2-api.herokuapp.com/videos/" +
        //   videoId +
        //   "/comments?api_key=03170a68-7fa6-4c3e-90db-528536e95c48",
        data: {
          comment: newComment.comment,
          name: newComment.name,
        },
      }).then((res) => {
        console.log(res);
      });
    }

    return (
      <section className="comment-form__section">
        <div className="comment-form__wrp">
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
              <div className="comment-form__items">
                <div className="comment__form-left">
                  <h3 className="comment__Label labels">
                    join the conversation
                  </h3>
                  <textarea
                    className="comment__text"
                    placeholder="That was easily the most spectacular BMX moment ever."
                    name="commentText"
                  ></textarea>
                </div>
                <div className="comment__form-right">
                  <button className="comment__button" value="Submit">
                    comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default CommentForm;
