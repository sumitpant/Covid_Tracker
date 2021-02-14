import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import '../Styles/Nav.css'
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <LocationOnIcon />  <h2>INDIA COVID-19 TRACKER</h2>
        <p className="smaller__TextLeft"><small>Let's all pray to make our Earth Covid free soon,Stay Safe  and do the locate</small></p>
      </div>
      <div className="nav__right">
          <h2>INDIA MAP</h2>
          <p className="smaller__TextRight"><small>Hover Over State for Details.</small></p>
          
      </div>
    </div>
  );
};

export default Nav;
