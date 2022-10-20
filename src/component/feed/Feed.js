import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  );
}
