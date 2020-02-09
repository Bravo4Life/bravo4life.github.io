import React from 'react';
import logo from '../assets/breast_cancer.svg';
import '../App.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/><br/><a href="http://bravo4life.tech/">Bravo4Life.tech</a>
        </header>
      </div>
    );
    
  }

}

export default Home;
