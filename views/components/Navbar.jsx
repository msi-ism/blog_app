const React = require("react");

class Navbar extends React.Component {
  render() {
    const { loggedInUser } = this.props
    console.log('nav' + loggedInUser)
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <nav className='navbar'>
          <div className="nav-nav">
            <a href="/">Home</a>
            <a href="/blog">Browse Notes</a>
            <a href="/blog/new">Write a note</a>
          </div>
          { !loggedInUser ? (<div className="so-div"> <a href="/users/signup">Sign-Up</a> </div>) : null}
          { loggedInUser ? ( <div className="so-div"><>Welcome, {loggedInUser}<a href='/users/signout'>{" SignOut"}</a> </></div>) : null}
        </nav>
      </div>
    );
  }
}

module.exports = Navbar;

