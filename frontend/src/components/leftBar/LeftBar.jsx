import "./leftbar.scss";

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
            <img src="https://cdn-icons-png.flaticon.com/512/4322/4322936.png" alt="" />
            <span>Memories</span>
          </div>
          <hr/>
          <div className="menu">
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
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3592/3592017.png" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3592/3592265.png" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4293/4293599.png" alt="" />
            <span>Give</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;