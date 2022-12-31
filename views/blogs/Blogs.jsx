const React = require("react");
const Navbar = require("../components/Navbar");

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props;
    console.log("blogs" + loggedInUser);
    console.log(loggedInUser)
    return (
      <div className="main-container">
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <Navbar loggedInUser={loggedInUser} />
        <div className="create-post-div">
          <h1 className="page-title">Bulletin Board</h1>
          <a href="/blog/new" className="create-post-link">
            Write a new note!
          </a>
        </div>
        <div className="bulletin-board">
          <ul className="browse-container">
            {blogs.map((blog, idx) => (
              <li key={idx} className="post-it">
                {" "}
                <div className="post-it-top">
                  <a href={`blog/${blog._id}`}>
                    <h2 className="post-it-title">{blog.title}</h2>
                  </a>
                </div>
                <p className="post-it-body">{blog.body}</p>
                <div className="post-it-bottom">
                  <p className="post-it-username">{"@" + blog.author}</p>
                  <div className='user-icos'>
                  <p className="post-it-likes">&hearts; {blog.likes}</p>
                  {blog.author === loggedInUser ? (
                    <a className="post-it-edit" href={`blog/${blog._id}/edit`}>
                      <img src="/images/edit.png"></img>
                    </a>
                  ) : null}
                  {blog.author === loggedInUser ? (
                    <form
                      className="post-it-delete"
                      action={`/blog/${blog._id}?_method=DELETE`}
                      method="POST"
                    >
                      <div className="delete-container">
                        <input
                          className="delete-input"
                          type="submit"
                          value=""
                        ></input>
                        <img
                          className="delete-img"
                          src="/images/trash.png"
                        ></img>
                      </div>
                    </form>
                  ) : null}
                  </div>
                </div>
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

module.exports = Blogs;
