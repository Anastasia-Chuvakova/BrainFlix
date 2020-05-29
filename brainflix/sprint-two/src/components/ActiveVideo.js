import React from "react";
import CommentForm from "./CommentForm";
import moment from "moment";

function ActiveVideo(props) {
  if (props.video.comments === undefined) {
    return <p>LOADING</p>;
  }

  return (
    <>
      <div className="active-video">
        <video
          className="active-vid__img"
          src={
            props.video.video + "?api_key=03170a68-7fa6-4c3e-90db-528536e95c48"
          }
          alt={props.video.title}
          poster={props.video.image}
          controls
        />{" "}
      </div>
      <section className="main__inf">
        <div className="active-video__txt-wrp">
          <h1 className="active-vid__title header">{props.video.title}</h1>
          <div className="activ-vid__inf">
            <div className="activ-vid__nameDate">
              <h2 className="active-vid__channel subheader">
                By {props.video.channel}
              </h2>
              <h2 className="active-vid__date subheader">
                {moment(props.video.timestamp).format("MM/DD/YYYY")}
              </h2>
            </div>
            <div className="views-likes__wrp">
              <img
                className="views__icon"
                src={require("./../assets/Icons/PNG/Icon-views.png")}
                alt="icon"
              />
              <h2 className="active-vid__views subheader">
                {props.video.views}
              </h2>
              <img
                className="likes__icon"
                src={require("./../assets/Icons/PNG/Icon-likes.png")}
                alt="icon"
              />
              <h2 className="active-vid__likes subheader">
                {props.video.likes}
              </h2>
            </div>
          </div>

          <p className="active-vid__desc paragraph">
            {props.video.description}
          </p>
        </div>
        <div>
          <CommentForm />
          {props.video.comments.map((comment) => (
            <div className="conversation__wrapper ">
              <div>
                <img
                  className="users__icon"
                  src={require("../assets/Icons/PNG/usericon-grey.png")}
                  alt="icon"
                />
              </div>
              <div className="conversation__container">
                <div className="conversation__info">
                  <h2 className="conversation__username subheader">
                    {comment.name}
                  </h2>
                  <h2 className="conversation__date subheader">
                    {moment(comment.timestamp).format("MM/DD/YYYY")}
                  </h2>
                </div>
                <p className="conversation__usercomment paragraph">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ActiveVideo;
