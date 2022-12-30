const React = require("react");
const ReactDom = require("react-dom");
const Navbar = require("../components/Navbar");

let fillerText = "What's on your mind?";

let clearFillerText = () => {
  fillerText = "";
};

class HomePage extends React.Component {
  render() {
    const { loggedInUser } = this.props;
    console.log("home" + loggedInUser);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <header>
          <Navbar loggedInUser={loggedInUser} />
        </header>
        <div className="home-container">
          {/* <img className='header-img' src='images/AYA2022wText.png'></img> */}
          <h1>Notes to Self</h1>
          {/* <h3>Discovering ourselves, together.</h3> */}
          <p>
            <span className="question-txt">What's something that you need to be reminded of?</span>
          </p>
          {/* <textarea placeholder='How are you feeling?'></textarea> */}
          <div class="post-it">
            <h2 className="post-it-title">Note to Self:</h2>
            {/* <ul>
                            <li className='input-box' contentEditable='true' onClick={clearFillerText}>{fillerText}</li>
                        </ul> */}
            <textarea
              className="input-box"
              type="text"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = HomePage;
