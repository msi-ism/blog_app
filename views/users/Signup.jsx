const React = require("react");
const Navbar = require("../components/Navbar");

class Signup extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Navbar />
        <h1>Create an new account</h1>

        <form action='/users/signup' method='POST' className="signup-box ">
          <fieldset>
            <legend>Create an account</legend>

            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" required />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required />
            <br />
            <input type="submit" value="Signup" />
          </fieldset>
        </form>

        <div className='auth-text'>
          <p>
            Already have an Account? <a href="/users/signin">Signin</a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Signup