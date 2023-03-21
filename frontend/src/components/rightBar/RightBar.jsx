import "./rightbar.scss";

const RightBar = () => {

  return (
    <div className="rightbar">
      <div className="container">
        <div className="suggestions">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/15405996/pexels-photo-15405996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Isabella Sanchez</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" alt="" />
              <span>Miguel Gonzalez</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
        </div>
        <div className="activities">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4921131/pexels-photo-4921131.jpeg"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Edith Williams</span> Changed their profile picture
              </p>
            </div>
          </div>         
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5549975/pexels-photo-5549975.jpeg"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Hanna Miller</span> Invites you to their new circle
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3055128/pexels-photo-3055128.jpeg"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Enzo García</span> Changed their cover photo
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4439608/pexels-photo-4439608.jpeg"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Jia Liu</span> Posted a new community event in your area
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Roshni Menon</span> Invites you to their event
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/15911516/pexels-photo-15911516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="text"> 
              <p>
              <span>Sadio Ndiaye</span> Commented on your marketplace listing
              </p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default RightBar;