import React from 'react';
import Body from './Body.js';

class Container extends React.Component {
  constructor(props) { 
    super(props) ;
    this.state = { "/": "The home page", "/arts": "The arts page", "/sports": "The sports page", "/politics": "The politics page", "/tech": "The tech page"};
  }
  render() {
    return (<Body data={this.state[this.props.location.pathname]} />);
  }
  componentDidMount() {
  }
}

export default Container;
