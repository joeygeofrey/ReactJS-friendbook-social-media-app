import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4233/4233978.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4232/4232807.png" alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4233/4233892.png" alt="" />
            <span>Circles</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3592/3592265.png" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4322/4322936.png" alt="" />
            <span>Memories</span>
          </div>
          <hr/>
          <div className="menu">
            <span>Your shortcuts</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4240/4240459.png" alt="" />
            <span>Calendar</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4449/4449529.png" alt="" />
            <span>Bookmarks</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4322/4322593.png" alt="" />
            <span>Journal</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4475/4475693.png" alt="" />
            <span>Gallery</span>
          </div>
          <hr/>
          <div className="menu">
            <span>Others</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3592/3592017.png" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;