import React from "react";
import Appsettings from "../../configs/appsettings";
import { useAppStore } from "../../store/contextapi/AppContext";
import "./navbar.scss";

const Navbar = () => {
  // #region
  //TODO: DELETE
  const appstate = useAppStore();
  appstate.apiCalls.ChuckCall.list().then((data) =>
    console.log(JSON.stringify(data))
  );
  //#endregion

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">{Appsettings.appName}Booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
