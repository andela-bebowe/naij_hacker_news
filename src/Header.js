import React from 'react';
import { Link } from 'react-router';
import Category from './Category.js'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active"><img src="img/logo.svg" width="10px" height="10px" alt="logo" /></Link>
              </li>
              <Category />
              <li>
                <input type="text" placeholder="Search" />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
