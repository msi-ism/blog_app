const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <nav className='navbar'>
          <a href="/">Home</a>
          <a href="/blog">Blogs</a>
          <a href="/blog/new">Write a note</a>
          <a href="/users/signup">SignIn/Up</a>
          <a href='/users/signout'>SignOut</a>
        </nav>
      </div>
    );
  }
}

module.exports = Navbar;

