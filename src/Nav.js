import React, {Component} from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({hidden: !this.state.hidden});
  }

  render() {
    return (
      <div className="Nav">
        <img className="pic" src="https://i.imgur.com/6LmI5ZV.jpg" alt="me"/>
        <div className="contact">
          <h2>Alex Jaynes</h2>
          <h4 onClick={this.handleClick}>Contact Info</h4>
        </div>
        <div className={this.state.hidden ? 'info hidden' : 'info'}>
          <p>508.685.5293</p>
          <p><a href="mailto:dr.ocheyo@gmail.com">Email Me</a></p>
          <p><a href="https://www.linkedin.com/in/alex-jaynes">LinkedIn</a></p>
          <p><a href="https://www.github.com/Ocheyo">GitHub</a></p>
        </div>
        <div className='list'>
          <h3 onClick={() => this.props.onClick('About Me')} className={this.props.current === 'About Me' ? "underline" : null}>{'About Me'}</h3>
          <h3 onClick={() => this.props.onClick('Shogi')} className={this.props.current === 'Shogi' ? "underline" : null}> {'Shogi'}</h3>
          <h3 onClick={() => this.props.onClick('Redidit')} className={this.props.current === 'Redidit' ? "underline" : null}>{'Redidit'}</h3>
          <h3 onClick={() => this.props.onClick('Commander')} className={this.props.current === 'Commander' ? "underline" : null}>{'Commander'}</h3>
        </div>
      </div>
    );
  }
}

export default Nav;
