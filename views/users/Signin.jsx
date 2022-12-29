const React = require("react");
const Navbar = require("../components/Navbar");

class Signin extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <h1>SignIn</h1>

        <form action="/users/signin" method="POST" className="signup-box">
          <fieldset>
            <legend>Sign-In to your account</legend>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required />
            <br />
            <input type="submit" value="Sign-In"></input>
          </fieldset>
        </form>
        <div className="auth-text">
          <p>
            Need an account? <a href="/users/signup">SignUp</a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Signin
