import React from 'react';
import NewsItem from './NewsItem.js'

class Body extends React.Component {
  render() {
    let newsData = this.props.newsData.hits;

    return (
      <div className="container">
        <h4>Hi I am the body I am at {this.props.pathData}</h4>
        <ul className="collection">
          {newsData.map(item => <NewsItem key={item.objectID} item={item}/>)}
        </ul>
      </div>
    );
  }
}

export default Body;
