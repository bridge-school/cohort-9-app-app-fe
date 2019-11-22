import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = ({ isAdmin }) => {
  return (
    <nav className="nav">
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/cohort-application">
            Cohort Application
          </Link>
        </div>
        { isAdmin && 
          <div>
            Admin view
          </div>
        }
      </div>
    </nav>
  )
}

export default Header;