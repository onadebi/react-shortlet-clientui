import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mainList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Featured />
        <div className="homeBodyContainer">
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Places guests love</h1>
          <FeaturedProperties />
        </div>
        <MailList />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
