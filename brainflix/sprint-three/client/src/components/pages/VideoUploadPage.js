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
      descrition: uploadDesc,
      image: "https://i.imgur.com/5qyCZrD.jpg",
    };

    axios({
      method: "post",
      url: `/videos`,
      data: {
        id: uuid(),
        title: newUpload.title,
        descrition: newUpload.description,
        image: newUpload.image,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
              className="hero__mainVideo"
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
