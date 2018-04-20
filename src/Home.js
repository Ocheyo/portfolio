import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Content from './Content';

class Home extends Component {
  constructor() {
    super();
    this.state = {
     current: 'Home'
    };
  }

  clickHandler(target) {
    this.setState({current: target});
  }

  render() {
    return (
      <div>
        <Nav current={this.state.current} onClick={this.clickHandler.bind(this)}/>
        <Sidebar />
        <Content current={this.state.current} />
      </div>
    )
  }
}

export default Home;
