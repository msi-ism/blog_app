const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component{
    render(){
        return(<div>
            <head>
                <link rel='stylesheet' href='/CSS/app.css'></link>
            </head>
            <Navbar />
            <div className='home-container'>
            <h1>As You Are</h1>
            <h3>Discovering ourselves, together.</h3>
            <p>Question of the day: <br /> How much would would a woodchuck chuck, if a woodchuck could chuck wood?</p>
            <textarea>How are you feeling?</textarea>
            </div>
         </div>)
    }
}

module.exports = HomePage