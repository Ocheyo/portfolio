import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        This is Home
        <Sidebar />
        <Nav />
      </div>
    )
  }
}

export default Home;
