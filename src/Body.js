import React from 'react';
import NewsItem from './NewsItem.js'

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Hi I am the body I am at {this.props.pathData}</h2>
      </div>
    );
  }
}

export default Body;
