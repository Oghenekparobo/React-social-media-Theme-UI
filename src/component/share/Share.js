import "./share.css";
import { MdPermMedia } from "react-icons/md";
import {AiTwotoneTag} from "react-icons/ai";
import {BsFillEmojiExpressionlessFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="./assets/person/1.jpeg"
            alt="profile"
            className="share-profile__img"
          />
          <input
            type="text"
            placeholder="what's on your mind"
            className="share-input"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <span htmlColor="tomato" className="share-option__icon">
                <MdPermMedia/>
              </span>
              <span className="share-option__text">Photo or Video</span>
            </div>
            <div className="share-option">
              <span className="share-option__icon">
                <AiTwotoneTag />
              </span>
              <span className="share-option__text">Tag</span>
            </div>
            <div className="share-option">
              <span className="share-option__icon">
                <HiLocationMarker/>
              </span>
              <span className="share-option__text">Location</span>
            </div>
            <div className="share-option">
              <span className="share-option__icon">
                <BsFillEmojiExpressionlessFill/>
              </span>
              <span className="share-option__text">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}
