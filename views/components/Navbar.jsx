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
          <a href="/blog/new">Create New Blog</a>
          <a href="/signin">SignIn/Up</a>
        </nav>
      </div>
    );
  }
}

module.exports = Navbar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Helvetica",
    backgroundColor: "antiquewhite",
  },
};
