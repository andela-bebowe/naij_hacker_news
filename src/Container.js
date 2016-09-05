import React from 'react';
import Body from './Body.js';
import newsData from './data.json'

class Container extends React.Component {
  constructor(props) { 
    super(props) ;
    this.state = {};
  }
  render() {
    return (<Body pathData={this.state[this.props.location.pathname]} newsData={newsData} />);
  }
  componentDidMount() {
    this.setState({
      "/": "The home page",
      "/arts": "The arts page",
      "/sports": "The sports page",
      "/politics": "The politics page",
      "/tech": "The tech page",
      "newsData": newsData
    })
  }
}

export default Container;
