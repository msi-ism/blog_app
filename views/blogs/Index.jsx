const React = require("react");

class Index extends React.Component {
  render() {
    const { blogs } = this.props
    return (
      <div style={styles.container} className='container'>
        <h1 style ={styles.header}>All Veggies</h1>
        <a style ={styles.createPostLink} href='/blogs/new'>Create New Blog Post!</a>
        <ul>
          {blogs.map((blog, idx) => (
            <li key={idx}>
              {" "}
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'royalblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '32px',
    color: '#fff',

  },
  ulContainer: {
    backgroundColor: '#fff',
    padding: '15px'
  },
  createPostLink: {
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  item: {
    padding: '10px',
    listStyleType: 'none'
  }
}

module.exports = Index;

