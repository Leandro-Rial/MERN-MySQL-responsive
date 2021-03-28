import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const styleMenu = {
    right: menu ? 0 : "-120%",
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <span className="fr">fr</span>en<span className="ch">ch</span>
      </Link>

      <div className="menu" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/" onClick={() => setMenu(!menu)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create" onClick={() => setMenu(!menu)}>
            Create Post
          </Link>
        </li>
        <li>
          <Link to="/history" onClick={() => setMenu(!menu)}>
            History
          </Link>
        </li>
        <li onClick={() => setMenu(!menu)} className="cruz">
          <i className="fas fa-times"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
