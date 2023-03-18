import "./rightbar.scss";

const RightBar = () => {

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg" alt="" />
              <span>Isabella Silva</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;