import './home.css';
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";


export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="home-container">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
    
  )
}
