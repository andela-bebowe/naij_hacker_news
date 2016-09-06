import React from 'react';
import Body from './Body.js';
import data from './data/data.json'
import sportsData from './data/sportsData.json'
import artsData from './data/artsData.json'
import politicsData from './data/politicsData.json'
import techData from './data/techData.json'

class Container extends React.Component {
  constructor(props) { 
    super(props) ;
    this.state = {};
  }
  render() {
    let newsData = {"/": data, "/arts": artsData, "/sports": sportsData, "/politics": politicsData, "/tech": techData }

    return (<Body pathData={this.state[this.props.location.pathname]} newsData={newsData[this.props.location.pathname]} />);
  }
  componentDidMount() {
    this.setState({
      "/": "The home page",
      "/arts": "The arts page",
      "/sports": "The sports page",
      "/politics": "The politics page",
      "/tech": "The tech page"
    })
  }
}

export default Container;
