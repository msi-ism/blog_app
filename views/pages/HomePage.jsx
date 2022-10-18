const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component{
    render(){
        return(<div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'></link>
                </head>
                <header>
                    <Navbar />
                </header>
                <div className='home-container'>
                    <img className='header-img' src='images/AYA2022wText.png'></img>
                    <h1>Notes to Self</h1>
                    <h3>Discovering ourselves, together.</h3>
                    <p><span className='question-txt'>Question of the day: </span><br /> What is your biggest fear?</p>
                    <textarea placeholder='How are you feeling?'></textarea>
                    <button>
                </div>
         </div>)
    }
}

module.exports = HomePage