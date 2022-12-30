const React = require("react");
const ReactDom = require("react-dom");
const Navbar = require("../components/Navbar");

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
          <h1>Notes to Self</h1>
          <p>
            <span className="question-txt">What's something that you need to be reminded of?</span>
          </p>
          <div className="post-it">
                {" "}
                <div className="post-it-top">
                  <a>
                    <h2 className="post-it-title">Alone Time</h2>
                  </a>
                </div>
                <p className="post-it-body">Sometimes I feel like I'm all alone in this world.</p>
                <div className="post-it-bottom">
                  <p className="post-it-username">{"@" + "marySue"}</p>
                  <div className='user-icos'>
                  <p className="post-it-likes">&hearts; 9</p>
                    <a className="post-it-edit">
                      <img src="/images/edit.png"></img>
                    </a>
                    <form
                      className="post-it-delete"
                    >
                      <div className="delete-container">
                        <input
                          className="delete-input"
                          type="submit"
                          value=""
                        ></input>
                        <img
                          className="delete-img"
                          src="/images/trash.png"
                        ></img>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

module.exports = HomePage;
