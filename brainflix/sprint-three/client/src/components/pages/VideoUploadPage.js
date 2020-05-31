//import React from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const VideoUploadPage = () => {
  function uploadItem(event) {
    event.preventDefault();

    var uploadDesc = event.target.description.value;
    var uploadTtl = event.target.title.value;

    let newUpload = {
      title: uploadTtl,
      description: uploadDesc,
      image: require("../../assets/Images/Upload-video-preview.jpg"),
      channel: "Anon",
      timestamp: 1590889235,
      views: "0",
      likes: "0",
      video:
        "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1544595784046,
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046,
        },
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046,
        },
      ],
    };

    axios({
      method: "post",
      url: `/videos`,
      data: {
        id: uuid(),
        title: newUpload.title,
        description: newUpload.description,
        image: newUpload.image,
        channel: newUpload.channel,
        timestamp: newUpload.timestamp,
        likes: newUpload.likes,
        video: newUpload.video,
        views: newUpload.views,
        comments: newUpload.comments,
      },
    })
      .then((res) => {
        console.log("Video Post Response = ", res);
      })
      .catch((err) => {
        console.log("Video Post Error - ", err);
      });
  }

  return (
    <>
      <form onSubmit={uploadItem}>
        <div className="uploadPage__title-wrp">
          <h1 className="uploadPage__title header">Upload Video</h1>
        </div>
        <div className="uploadPage__content">
          <div className="uploadPage-vid__inf">
            <h3 className="uploadPage__vid-ttl labels">video thumbnail</h3>
            <video
              className="UploadVideo"
              poster={require("../../assets/Images/Upload-video-preview.jpg")}
              width="100%"
              height="100%"
              border-radius="4px"
              alt="video"
            ></video>
          </div>

          <div className="uploadPage__form">
            <div className="uploadPage__form-ttl-wrp">
              <h3 className="uploadPage__form-label labels">
                title your video
              </h3>
              <input
                type="text"
                id="videoTitle-id"
                className="uploadPage__form-field"
                placeholder="Add a title to our video"
                name="title"
              />
            </div>

            <div className="uploadPage__form-desc-wrap">
              <h3 className="uploadPage__form-label labels">
                add a video description
              </h3>
              <textarea
                type="text"
                id="video-id"
                className="uploadPage__desc"
                placeholder="Add a description to your video"
                name="description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="UploadPage__btn-wrp">
          <button type="submit" className="publish-btn">
            publish
          </button>

          <NavLink className="link-home" to="/" exact>
            <button className="cxl-btn">cancel</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default VideoUploadPage;

// const VideoUploadPage = () => {
//   return (
//     <>
//       <div className="uploadPage__title-wrp">
//         <h1 className="uploadPage__title header">Upload Video</h1>
//       </div>
//       <div className="uploadPage__content">
//         <div className="uploadPage-vid__inf">
//           <h3 className="uploadPage__vid-ttl labels">video thumbnail</h3>
//           <video
//             className="UploadVideo"
//             poster={require("../../assets/Images/Upload-video-preview.jpg")}
//             className="hero__mainVideo"
//             width="100%"
//             height="100%"
//             border-radius="4px"
//             alt="video"
//           ></video>
//         </div>

//         <div className="uploadPage__form">
//           <div className="uploadPage__form-ttl-wrp">
//             <h3 className="uploadPage__form-label labels">title your video</h3>
//             <input
//               type="text"
//               id="videoTitle-id"
//               className="uploadPage__form-field"
//               placeholder="Add a title to our video"
//               name="videoTitle"
//             />
//           </div>
//           <div className="uploadPage__form-desc-wrap">
//             <h3 className="uploadPage__form-label labels">
//               add a video description
//             </h3>
//             <textarea
//               type="text"
//               id="video-id"
//               className="uploadPage__desc"
//               placeholder="Add a description to your video"
//               name="videoDescription"
//             ></textarea>
//           </div>
//         </div>
//       </div>
//       <div className="UploadPage__btn-wrp">
//         <button className="publish-btn">publish</button>
//         <NavLink className="link-home" to="/" exact>
//           <button type="submit" className="cxl-btn">
//             cancel
//           </button>
//         </NavLink>
//       </div>
//     </>
//   );
// };

// export default VideoUploadPage;
