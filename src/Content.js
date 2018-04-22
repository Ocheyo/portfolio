import React, {Component} from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content">
        {contents[this.props.current]}
      </div>
    );
  }
}

const contents = {
  Home: (
    <div>
      <h3>SOFTWARE ENGINEER</h3>
      <p>As a software engineer, I enjoy bringing my particular creative and intuitive approach to problem-solving. I really dig algorithms, reminiscent of working through puzzle books as a child. Brain teasers and riddles were addicting. Now, code challenges and app development provide that rush.</p>
      <p>I started out with BASIC, writing build-your-own-adventure book style games to send to classmates. I moved on to VBA for Excel and wrote macros to make life easier at my family's print shop. From there, I went on learning Javascript and web development, which is still my passion.</p>
      <p>I am adaptive and resourceful, I love finding an efficient solution to a complicated problem. I like working with React, as well as SQL databases. Building full-stack apps using Node.js and Express has given me experience using Redux, Sockets, NoSQL databases, and AWS, among other technologies. An application really coming together gives me the thrill and sense of accomplishment that makes the hard work and frustration really worthwhile.</p>
    </div>
  ),

  Shogi: (
    <div>
      <a href="http://shogi.gg">Shogi-Grandmasters</a>
      <p>Sign up and play Shogi (Japanese variant of chess) against real opponents; challenge your friends to ranked or unranked matches</p>
      <h5>Tech Stack: Javascript | React | React Router | Socket.io | Node | Express | Postgres | Redis | AWS EC2 | AWS RDS</h5>
      <img className="screenshot" src="https://i.imgur.com/gxPefdC.png" alt="screenshot"/>
      <img className="screenshot" src="https://i.imgur.com/Uh2S4US.png" alt="screenshot"/>
    </div>
  ),

  Redidit: (
    <div>
      <a href="http://aask4-redidit.herokuapp.com">Redidit</a>
      <p>Reddit clone, containing functionality such as posts, comments, subreddits, and subscriptions</p>
      <h5>Tech Stack: Javascript | React | Redux | React Router | Node | Express | Postgres | Heroku</h5>
      <img className="screenshot" src="https://i.imgur.com/F1KuxbA.png" alt="screenshot" />
      <img className="screenshot" src="https://i.imgur.com/GeiHWHI.png" alt="screenshot" />
    </div>
  ),

  Commander: (
    <div>
      <a href="https://ocheyo.github.io/commander-decks">Commander Decklists</a>
      <p>Personally constructed decklists for my favorite Magic: The Gathering format</p>
      <h5>Tech Stack: Vanilla Javascript | Raw CSS</h5>
      <img className="screenshot" src="https://i.imgur.com/qgPJyUi.png" alt="screenshot" />
      <img className="screenshot" src="https://i.imgur.com/PCGOFkL.png" alt="screenshot" />
    </div>
  )
}

export default Content;
