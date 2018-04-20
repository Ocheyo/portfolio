import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img className="pic" src="https://i.imgur.com/6LmI5ZV.jpg" alt="me"/>
        <div className='list'>
          <h3 onClick={() => this.props.onClick(this.props.current === 'Shogi' ? 'Home' : 'Shogi')}>{this.props.current === 'Shogi' ? 'Home' : 'Shogi'}</h3>
          <h3 onClick={() => this.props.onClick(this.props.current === 'Redidit' ? 'Home' : 'Redidit')}>{this.props.current === 'Redidit' ? 'Home' : 'Redidit'}</h3>
          <h3 onClick={() => this.props.onClick(this.props.current === 'Commander' ? 'Home' : 'Commander')}>{this.props.current === 'Commander' ? 'Home' : 'Commander'}</h3>
        </div>
      </div>
    );
  }
}

export default Nav;
