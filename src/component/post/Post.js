import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top__left">
            <img
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="post-profile__img"
            />
            <span className="post-username">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top__right">
            <span className="top-right__icon">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.photo} alt="post" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom__left">
            <img
              className="like-icon"
              onClick={likeHandler}
              src="./assets/like.png"
              alt="like"
            />
            <img
              className="like-icon"
              onClick={likeHandler}
              src="./assets/heart.png"
              alt="heart"
            />
            <span className="post-like__counter">{like} people liked this</span>
          </div>
          <div className="post-bottom__right">
            <span className="post-comment__text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
