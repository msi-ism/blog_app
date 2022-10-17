const React = require('react')


class Edit extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
                <h1>Edit Blog</h1>
                <form action={`/blog/${blog._id}?_method=PUT`} method='POST'>
                     title: <input type='text' name='title'   /> 
                     <br />            
                     body: <input type='text' name='body' /> 
                     <br />
                     author: <input type='text' name='author'/>
                     <br />
                     <input type='submit' value='Edit post!' />
                </form>
                <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete post!' />
                </form>
            </div>
        )
    }
}

module.exports = Edit
