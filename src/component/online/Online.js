import "./online.css";
export default function Online({user}) {
  return (
    <li className="right-bar__friend">
      <div className="right-bar_img-container">
        <img
          src={user.profilePicture}
          alt="person"
          className="right-bar__profile-img"
        />
        <span className="right-bar__online"></span>
      </div>
      <span className="right-bar__username">{user.username}</span>
    </li>
  );
}
