import React from "react";

const Header = ({user, setUser}) => {
  return (
    <div>
      Header
      <header>
        <nav>
        <div className="header">
            <div className="header-logo">
                <a href="#"><img src="images/CodeSquad-Comics-logo.png" /></a>

            </div>

            <div className="header-links">
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Login</a></p>

            </div>

            <a href="javascript:void(0);" class="nav-icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>



        </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
