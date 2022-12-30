import React from "react";

const BulletinBoard = () => {
  const { blogs, loggedInUser } = this.props;
  console.log("blogs" + loggedInUser);
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
                <p className="post-it-username">{"@" + blog.author}</p>
                <a href={`blog/${blog._id}`}>
                  <h2 className="post-it-title">{blog.title}</h2>
                </a>
              </div>
              <p className="post-it-body">{blog.body}</p>
              <div className="post-it-bottom">
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
                      <img className="delete-img" src="/images/trash.png"></img>
                    </div>
                  </form>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BulletinBoard;
