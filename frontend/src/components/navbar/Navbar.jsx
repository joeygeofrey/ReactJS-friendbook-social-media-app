import "./navbar.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={({textDecoration: "none"})} >
          <span>friendbook</span>
        </Link>
        <div className="explore">
          <SearchOutlinedIcon style={{ fill: '#E85A4F' }}/>
          <input type="text" placeholder="Explore"/>        
        </div>
      </div>
      <div className="right">
        {/*<EmailRoundedIcon style={{ fill: '#1A1A1A' }}/>*/}
        {/*<NotificationsOutlinedIcon style={{ fill: '#1A1A1A' }}/>*/}
        <div className="user">
          <img src="https://pbs.twimg.com/profile_images/1477448505841143814/YYEyBAHn_400x400.jpg" alt="" />
          <span>Joey Geofrey</span>
          <MoreVertOutlinedIcon style={{ fill: '#E85A4F', cursor: 'pointer' }}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;