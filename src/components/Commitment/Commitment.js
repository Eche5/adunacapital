import React from "react";
import SubCommitment from "../SubCommitment";
import NavBar from "../NavBar";
import Potential from "../Potential";
import Policy from "../Policy";
import Footer from "../Footer";

function Commitment() {
  return (
    <div>
      <NavBar />
      <SubCommitment />
      <Potential />
      <Policy />
      <Footer />
    </div>
  );
}

export default Commitment;
