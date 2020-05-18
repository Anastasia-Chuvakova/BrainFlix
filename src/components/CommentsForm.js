// //on comment form submit, take form date and post back to api and create html for new comment data

// function CommentsForm() {
//   return (
//     <div className="comments__wrapper">
//       <h2>3 Comments</h2>
//       <div className="users__icon">
//         <img
//           src={require("../assets/Icons/PNG/userico.png")}
//           className="users__icon"
//           alt="img"
//         />
//       </div>
//       <div className="comments__form">
//         <label className="Label">join the conversation</label>
//         <input
//           className="comments__text"
//           placeholder="That was easily the most spectacular BMX moment ever."
//         ></input>
//         <button className="comments__button">comment</button>
//       </div>
//     </div>
//   );

//   function displayComment(event) {
//     event.preventDefault();

//     // let commentsForm = document.getElementById("comments-form");

//     // var commentsNameVal = event.target.commentsName.value;
//     var commentsTextVal = event.target.commentsText.value;

//     //check for empty fields and push to info object
//     if (commentsNameVal !== "" && commentsTextVal !== "") {
//       info.push({
//         id: info.length + 1,
//         name: commentsNameVal,
//         date: new Date(),
//         comment: commentsTextVal,
//       });
//       commentsForm.reset();
//     }
//   }
// }

// export default CommentsForm;
