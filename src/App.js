import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
