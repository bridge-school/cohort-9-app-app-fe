import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAdmin }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Cohort Application
        </li>
        { isAdmin && 
          <li>
            Admin view
          </li>
        }
      </ul>
    </nav>
  )
}

export default Header;