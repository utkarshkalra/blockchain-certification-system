import React from "react";
// import logo from "../Images/certification_logo.png";

function Homepage(props) {
  return (
    <header className="App-header">
      {/* <img src={logo} alt="logo" /> */}
      <p>
        Welcome to <br />
        <span className="brand-name">Certilock,</span> <br />
        Blockchain based certification system
        <br />
      </p>
    </header>
  );
}

export default Homepage;
