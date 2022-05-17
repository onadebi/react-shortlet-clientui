import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";
import Appsettings from "../../configs/appsettings";
import Home from "../home/Home";
import Shortel from "../hotel/Shortel";
import List from "../list/List";
import { v4 as uuid } from "uuid";
import "./publiclayout.scss";
import NotFound from "../notfound/NotFound";
import HelmetTag from "../../components/common/HelmetTag";

const PublicLayout = () => {
  const userCookie = Appsettings.functions.getCookieByName(
    Appsettings.cookies.main
  );
  const location = useLocation();

  if (userCookie) {
    // console.log(Appsettings.functions.getAllCookies());
  } else {
    const userIdentifier = uuid();
    Appsettings.functions.createCookieInHour(
      Appsettings.cookies.main,
      userIdentifier,
      720
    );
  }

  useEffect(() => {});
  return (
    <HelmetProvider>
      <HelmetTag title="Apartments booking space"/>
      <div className="publicLayout">
        <div className="layoutContainer">
          <Navbar />
          <Header type={location.pathname === "/"} />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="searchresults" element={<List />} />
              <Route path="searchresults/:id" element={<Shortel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PublicLayout;
