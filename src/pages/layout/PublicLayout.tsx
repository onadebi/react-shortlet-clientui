import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";
import Appsettings from "../../configs/appsettings";
import Home from "../home/Home";
import Space from "../space/Space";
import List from "../list/List";
import { v4 as uuid } from "uuid";
import "./publiclayout.scss";
import NotFound from "../notfound/NotFound";
import HelmetTag from "../../components/common/HelmetTag";
import MailList from "../../components/mainList/MailList";
import Footer from "../../components/footer/Footer";

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
              <Route path="spacesresults" element={<List />} />
              <Route path="spaces/:id" element={<Space />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <MailList />
        <Footer/>
      </div>
    </HelmetProvider>
  );
};

export default PublicLayout;
