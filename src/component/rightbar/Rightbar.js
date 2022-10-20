import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img
            src="./assets/gift.png"
            alt="birthday"
            className="birthday-img"
          />
          <span className="birthday-text">
            <b>steph</b> and <b>74 others</b> have birthdays today.
          </span>
        </div>
        <img src="./assets/ad.png" alt="ad" className="right-bar__ad" />
        <h4 className="right-bar__title">Online Friends</h4>
        <ul>
          {Users.map((user) => (
            <Online user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
