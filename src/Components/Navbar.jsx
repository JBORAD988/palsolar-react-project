import React, { useState } from "react";
import "../assets/Style/navbar.css"
import logo from "../assets/images/new_logo.jpg";

const Header = () => {
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="d-flex justify-content-between align-items-center nav_main">
      <div className="logo_main cursor-pointer" 
      // onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </div>
      {/* //${menuOpen ? "open" : ""} */}
      <div className={`nav_items_container `}> 
        <div className="nav_items d-flex justify-content-center">
          <div className="item" style={{fontSize:"large"}} 
          // onClick={() => navigate("/")}
          >
            Home
          </div>
          <div className="item" style={{fontSize:"large"}}
          // onClick={() => navigate("/about-us")}
          >
            About Us
          </div>
          <div className="item" style={{fontSize:"large"}} 
          // onClick={() => navigate("/products")}
          >
            Product
          </div>
          <div className="item" style={{fontSize:"large"}} 
          // onClick={() => navigate("/gallery")}
          >
            Gallery
          </div>
          <div className="item" style={{fontSize:"large"}} 
          // onClick={() => navigate("/contact-us")}
          >
            Contact
          </div>
        </div>
      </div>
      {/* <div className="menu_icon" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : menuIcon} alt="menu icon" />
      </div> */}
    </div>
  );
};

export default Header;