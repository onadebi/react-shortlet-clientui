import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Appsettings from "../../configs/appsettings";
import Home from "../home/Home";
import Shortel from "../hotel/Shortel";
import List from "../list/List";
import {v4 as uuid} from 'uuid';
import "./publiclayout.scss";
import NotFound from "../notfound/NotFound";

const PublicLayout = () => {

  const location = useLocation();
  const userCookie = Appsettings.functions.getCookieByName(Appsettings.cookies.main);

  
  if(userCookie){
    // console.log(Appsettings.functions.getAllCookies());
  }
  else{const userIdentifier= uuid(); Appsettings.functions.createCookieInHour(Appsettings.cookies.main,userIdentifier,720)}

  useEffect(()=>{

  })
  return (
    <div className="publicLayout">
      <div className="layoutContainer">
        <Navbar />
        <Header type={location.pathname === '/'}/>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="shortels" element={<List />} />
              <Route path="shortels/:id" element={<Shortel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </div>
  );
};

export default PublicLayout;
