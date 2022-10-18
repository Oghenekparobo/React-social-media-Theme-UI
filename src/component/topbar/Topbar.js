import "./topbar.css";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson, IoMdNotifications } from "react-icons/io";
import { BsFillChatTextFill } from "react-icons/bs";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="tobar-left">
        <div className="logo">Social media</div>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <span className="search-icon">
           
            <FaSearch />
          </span>

          <input
            type="text"
            placeholder="search for friend, post or a video"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <div className="topbar-link">Home</div>
          <div className="topbar-link">Timeline</div>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon__item">
            <IoIosPerson />
            <span className="topbar-icon__badge"> 1</span>
          </div>
          <div className="topbar-icon__item">
            <BsFillChatTextFill />
            <span className="topbar-icon__badge"> 1</span>
          </div>
          <div className="topbar-icon__item">
            <IoMdNotifications />
            <span className="topbar-icon__badge"> 1</span>
          </div>
        </div>
        <img
          src="./assets/person/1.jpeg"
          alt="topbar img-logo"
          className="topbar-img"
        />
      </div>
    </div>
  );
}
