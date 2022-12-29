const React = require("react")
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props
    console.log('blogs' + loggedInUser)
    return (
      <div className="main-container">
        <head>
          <link rel='stylesheet' href='/CSS/app.css'></link>
        </head>
        <Navbar loggedInUser={loggedInUser} />
        <h1 className='page-title'>Bulletin Board</h1>
        <a href='/blog/new' className='create-post-link'>Write a new note!</a>
        <div className="bulletin-board">
          <ul className='browse-container'>
            {blogs.map((blog, idx) => (
              <li  key={idx} className='post-it'>
                {" "}
                <p className="post-it-username">{'@'+ blog.author}</p>
                <a href={`blog/${blog._id}`}><h2>{blog.title}</h2></a>
                <p className='note-body'>{blog.body}</p>
                <p>&hearts; {blog.likes}</p>
                {blog.author === loggedInUser ? (<a  href={`blog/${blog._id}/edit`}>Edit Post!</a>) : null }
                {blog.author === loggedInUser ? (<form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete post!' />
                </form>) : null }
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// const styles = {
//   container: {
//     backgroundColor: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   timeline: {
//     margin: '20px',
//     padding: '40px'
//   },
//   header: {
//     fontSize: '32px',
//     color: 'black',

//   },
//   ulContainer: {
//     backgroundColor: '#fff',
//     padding: '15px',
//     flexDirection: 'reverse-column'
//   },
//   createPostLink: {
//     backgroundColor: '#fff',
//     padding: '5px',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     marginLeft: '20px',
//     marginBottom: '20px'
//   },
//   item: {
//     display: 'flex',
//     flexDirection: 'column',
//     listStyleType: 'none',
//     border: '2px solid rgba(0, 0, 150, 0.3)',
//     margin: '10px',
//     width: '100%'
//   },
//   likes: {
//     display: 'inline-block',
//     alignSelf: 'right',
//     color: 'red',
//     float: 'right',

//   }
// }

module.exports = Blogs

