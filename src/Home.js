import React, {Component} from 'react';
import Nav from './Nav';
import Content from './Content';

class Home extends Component {
  constructor() {
    super();
    this.state = {
     current: 'About Me'
    };
  }

  clickHandler(target) {
    this.setState({current: target});
  }

  render() {
    return (
      <div>
        <Nav current={this.state.current} onClick={this.clickHandler.bind(this)}/>
        <hr />
        <div className="page">
          <Content current={this.state.current} />
        </div>
      </div>
    )
  }
}

export default Home;
