import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom"

interface HeaderProps {
  navigationLinks: { text: string; link: string }[];
}

const Header: React.FC<HeaderProps> = ({  navigationLinks }) => {
  return (
    <header className="header">
      <div className="logo">
        <h2>GraphQL</h2>
      </div>
      <nav className="navigation">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              {/* <a href={link.link}>{link.text}</a> */}
              <NavLink to={link.link}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
