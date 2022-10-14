const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component{
    render(){
        return(<div>
            <head>
                <link rel='stylesheet' href='/CSS/app.css'></link>
            </head>
            <Navbar />
            <h1>As You Are</h1>
            <h3>Discovering ourselves, together.</h3>



         </div>)
    }
}

module.exports = HomePage