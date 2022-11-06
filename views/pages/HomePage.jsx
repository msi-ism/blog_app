const React = require('react')
const ReactDom = require('react-dom')
const Navbar = require('../components/Navbar')

let fillerText = 'What on your mind?'



class HomePage extends React.Component{
    render(){
        const {loggedInUser} = this.props
        console.log('home' + loggedInUser)
        return(<div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'></link>
                </head>
                <header>
                    <Navbar loggedInUser={loggedInUser}/>
                </header>
                <div className='home-container'>
                    {/* <img className='header-img' src='images/AYA2022wText.png'></img> */}
                    <h1>Notes to Self</h1>
                    {/* <h3>Discovering ourselves, together.</h3> */}
                    <p><span className='question-txt'>Question of the day: </span><br /><br />In what ways could you take better care of yourself?</p>
                    {/* <textarea placeholder='How are you feeling?'></textarea> */}
                    <div class='post-it' >
	                    <h2 className='postit-header'>Note to Self:</h2>
                        <ul>
                            <li className='input-box' contentEditable='true' onClick={() => {fillerText = ''}}>{fillerText}</li>
    
                        </ul>
                    </div>    
                </div>
         </div>)
    }
}

module.exports = HomePage