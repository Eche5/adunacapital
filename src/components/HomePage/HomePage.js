import React from "react";
import HomeBody from "../HomeBody";
import NavBar from "../NavBar";
import Welcome from "../Welcome";
import Mission from "../Mission";
import Strategy from "../Strategy";
import Invest from "../Invest";
import Join from "../Join";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeBody />
      <Welcome />
      <Mission />
      <Strategy />
      <Invest />
      <Join />
      <Footer />
    </div>
  );
}

export default HomePage;
