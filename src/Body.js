import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Hi I am the body I am at {this.props.data}</h2>
      </div>
    );
  }
}

export default Body;
