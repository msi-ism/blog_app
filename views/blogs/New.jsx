const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Create New Blog</h1>
                <form action='/blog' method='POST'>
                     title: <input type='text' name='title'   /> 
                     <br />            
                     body: <input type='text' name='body' /> 
                     <br />
                     author: <input type='text' name='author'/>
                     <br />
                     <input type='submit' value='Create new post!' />
                </form>
            </div>
        )
    }
}

module.exports = New
