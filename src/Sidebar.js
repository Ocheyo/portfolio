import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h3>Alex Jaynes</h3>
        <p>508.685.5293</p>
        <a href="mailto:dr.ocheyo@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/alex-jaynes">LinkedIn</a>
        <a href="https://www.github.com/Ocheyo">GitHub</a>
      </div>
    );
  }
}

export default Sidebar;
