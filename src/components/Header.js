import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1>Jordan Pagkalinawan</h1>
      <ul className="nav">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Journalism" className="link">
            Journalism
          </Link>
        </li>
        <li>
          <Link to="/Music" className="link">
            Music
          </Link>
        </li>
      </ul>
    </div>
  );
}
