import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top__left">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="post-profile__img"
            />
            <span className="post-username">clarkson clark</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top__right">
            <span className="top-right__icon">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Hey it's my first post :(</span>
          <img src="./assets/post/1.jpeg" alt="post" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom__left">
            <img className="like-icon" src="./assets/like.png" alt="like" />
            <img className="like-icon" src="./assets/heart.png" alt="heart" />
            <span className="post-like__counter"> 2 people liked this</span>
          </div>
          <div className="post-bottom__right">
           <span className="post-comment__text">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
