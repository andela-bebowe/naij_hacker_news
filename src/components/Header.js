import React from 'react';
import { Link } from 'react-router';
import Category from './Category.js'

class Header extends React.Component {
  componentDidMount() {
    /* global $ */
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" data-activates="mobile-view" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul>
              <li className="left">
                <Link to="/"><span>Naija Hacker News </span><i className="fa fa-hacker-news" aria-hidden="true"></i></Link>
              </li>
            </ul>
            <Category />
            <form className="right">
              <div className="input-field">
                <input ref="search" type="search" id="search" required />
                <label htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
