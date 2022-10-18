const React = require("react")
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props
    console.log(loggedInUser)
    return (
      <div>
        <head>
          <link rel='stylesheet' href='/CSS/app.css'></link>
        </head>
        <Navbar />

        <h1 style ={styles.header}>Blog Posts</h1>
        <a style ={styles.createPostLink} href='/blog/new'>Write a new note!</a>
        <div>
          <ul style={styles.timeline}>
            {blogs.map((blog, idx) => (
              <li style={styles.item} key={idx}>
                {" "}
                <h3>{'@'+ blog.author}</h3>
                <a href={`blog/${blog._id}`}><h2>{blog.title}</h2></a>
                <p>{blog.body}</p>
                <p style={styles.likes}>&hearts; {blog.likes}</p>
                {blog.author === loggedInUser ? (<a style={styles.createPostLink} href={`blog/${blog._id}/edit`}>Edit Post!</a>) : null }
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

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timeline: {
    backgroundColor: 'violet',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '40px'
  },
  header: {
    fontSize: '32px',
    color: 'black',

  },
  ulContainer: {
    backgroundColor: '#fff',
    padding: '15px',
    flexDirection: 'reverse-column'
  },
  createPostLink: {
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  item: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    listStyleType: 'none',
    border: '2px solid rgba(0, 0, 150, 0.3)',
    margin: '10px',
    width: '100%'
  },
  likes: {
    display: 'inline-block',
    alignSelf: 'right',
    color: 'red',
    float: 'right',

  }
}

module.exports = Blogs

