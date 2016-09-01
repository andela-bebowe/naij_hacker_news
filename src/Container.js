import React from 'react';
import Body from './Body.js';

class Container extends React.Component {
  constructor(props) { 
    super(props) ;
    this.state = {};
  }
  render() {
    return (<Body data={this.state[this.props.location.pathname]} />);
  }
  componentDidMount() {
    this.setState({ "/": "The sethome page", "/arts": "The setarts page", "/sports": "The setsports page", "/politics": "The setpolitics page", "/tech": "The settech page"})
  }
}

export default Container;
