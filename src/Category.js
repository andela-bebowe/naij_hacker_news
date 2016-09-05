import React from 'react';
import { Link, IndexLink } from 'react-router';

class Category extends React.Component {
  render() {
    return (
      <ul className="categories center hide-on-med-and-down">
        <li>
          <IndexLink to="/" activeClassName="active">All</IndexLink>
        </li>
        <li>
          <Link to="/sports" activeClassName="active">Sports</Link>
        </li>
        <li>
          <Link to="/tech" activeClassName="active">Tech</Link>
        </li>
        <li>
          <Link to="/politics" activeClassName="active">Politics</Link>
        </li>
        <li>
          <Link to="/arts" activeClassName="active">Arts</Link>
        </li>
      </ul>
    );
  }
}

export default Category;
