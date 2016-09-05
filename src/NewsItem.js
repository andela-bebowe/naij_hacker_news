import React from 'react';

class NewsItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <li className="collection-item">
        <span className="title">{item.title}</span>
        <div className="item-info">
          <p>{item.author}</p>
          <p>Points: {item.points}</p>
          <a href="#!" className=""><i className="material-icons">grade</i></a>
        </div>
      </li>
    );
  }
}

export default NewsItem;
