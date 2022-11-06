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
          <a href="/">Home</a>
          <a href="/blog">Browse Notes</a>
          <a href="/blog/new">Write a note</a>
          { !loggedInUser ? ( <a href="/users/signup">Sign-Up</a> ) : null}
          { loggedInUser ? ( <a href='/users/signout'>SignOut</a> ) : null}
        </nav>
      </div>
    );
  }
}

module.exports = Navbar;

