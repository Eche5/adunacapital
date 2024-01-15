import React from "react";
import NavBar from "../NavBar";
import SubCommitment from "../SubPortfolio";
import Investment from "../Investment";
import Footer from "../Footer";

function Commitment() {
  return (
    <div>
      <NavBar />
      <SubCommitment />
      <Investment />
      <Footer />
    </div>
  );
}

export default Commitment;
