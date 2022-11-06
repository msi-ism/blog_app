const React = require("react");

class Navbar extends React.Component {
  render() {
    const { loggedIn } = this.props
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <nav className='navbar'>
          <a href="/">Home</a>
          <a href="/blog">Browse Notes</a>
          <a href="/blog/new">Write a note</a>
          <a href="/users/signup">SignUp</a>
          { loggedIn ? ( <a href='/users/signout'>SignOut</a> ) : null}
        </nav>
      </div>
    );
  }
}

module.exports = Navbar;

