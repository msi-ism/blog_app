const React = require('react')
const Navbar = require('../components/Navbar')

class Signin extends React.Component {
    render(){
        return(
            <div>
                <h1>Sign In Page</h1>

                <form action='/users/signin' method='POST'>
                    <fieldset>
                        <legend>Sign-In to your account</legend>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type='text' name='email' required/>
                        <br />
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input type='password' name='password' required/>
                        <br />
                        <input type='submit' value='Sign-In'></input>


                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = Signin

