const React = require("react")
const Navbar = require('../components/Navbar')

class ShowBlogs extends React.Component {
  render() {
    const  blog  = this.props.blog
    const {loggedInUser} = this.props
    console.log('show' + loggedInUser)
    return (
      <div>
        <head>
          <link rel='stylesheet' href='/CSS/app.css'></link>
        </head>
        <Navbar loggedInUser={loggedInUser} />

        <h1 style ={styles.header}>Blog Posts</h1>
        <div style={styles.item} key={''}>
              {" "}
              <h3>{'@'+ blog.author}</h3>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p style={styles.likes}>&hearts; {blog.likes}</p>
        </div>
        <a style ={styles.createPostLink} href='/blog/new'>Create New Post!</a>
      </div>
    )
  }
}

module.exports = ShowBlogs

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
    width: 'auto'
  },
  likes: {
    display: 'inline-block',
    alignSelf: 'right',
    color: 'red',
    float: 'right',

  }
}


