import "./sidebar.css";
import {
  MdRssFeed,
  MdChatBubble,
  MdVideocam,
  MdGroup,
  MdBookmark,
} from "react-icons/md";
import { BsQuestionLg, BsFillBagFill, BsCalendarEvent } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <MdRssFeed />
            </span>
            <span className="list-item__text">Feed</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <MdChatBubble />
            </span>
            <span className="list-item__text">Chats</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <MdVideocam />
            </span>
            <span className="list-item__text">Videos</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <MdGroup />
            </span>
            <span className="list-item__text">Groups</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <MdBookmark />
            </span>
            <span className="list-item__text">Bookmarks</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <BsQuestionLg />
            </span>
            <span className="list-item__text">Question</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <BsFillBagFill />
            </span>
            <span className="list-item__text">Jobs</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <BsCalendarEvent />
            </span>
            <span className="list-item__text">Events</span>
          </li>
          <li className="sidebar-list__item">
            <span class="list-item__icon">
              <GiGraduateCap />
            </span>
            <span className="list-item__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend__list">
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="./assets/person/2.jpeg"
              alt="friend"
              className="sidebar-friend__img"
            />
            <span className="sidebar-friend__name">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
