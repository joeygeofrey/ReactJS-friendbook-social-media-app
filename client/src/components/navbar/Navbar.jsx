import "./navbar.scss";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={({textDecoration: "none"})} >
          <span>friendbook</span>
        </Link>
        <HomeRoundedIcon/>
        <DarkModeOutlinedIcon/>
        <WidgetsOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search"/>        
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailRoundedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://pbs.twimg.com/profile_images/1477448505841143814/YYEyBAHn_400x400.jpg" alt="" />
          <span>Joey Geofrey</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;