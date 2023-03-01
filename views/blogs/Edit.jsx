const React = require('react')
const ReactDom = require('react-dom')
const Navbar = require("../components/Navbar");
import { useState, useEffect, useRef } from "react";

const Edit = ({loggedInUser, blog}) => {
    
    // const [color, setColor] = useState('post-it')

    // const changeBlue = () => {
    //     setColor('post-it-blue')
    //     console.log(color)
    // }

  console.log("new" + loggedInUser);
  return (
    <div>
      <head>
        <link rel="stylesheet" href="/CSS/app.css"></link>
      </head>
      <header>
        <Navbar loggedInUser={loggedInUser} />
      </header>
      <div className="home-container">
        <h1>Create New Post</h1>
        <p>
          <span className="question-txt">
            Write a note to help your future self:{" "}
          </span>
        </p>
        <div className="post-it new-post-it" id="post-it">
          <h2 className="post-it-title">
            {"@" + loggedInUser + "'s Note to Self:"}
          </h2>
          <form action={`/blog/${blog._id}?_method=PUT`} method='POST'>
            <textarea
              autoFocus
              type="text"
              name="title"
              className="input-box-title"
              value={blog.title}
              maxLength={30}
            ></textarea>
            <textarea
              name="body"
              className="input-box"
              type="text"
              value={blog.body}
              maxLength={100}
            ></textarea>
            <div className="new-note-bottom">
              <input
                className="note-submit"
                type="submit"
                value="Re-submit note!"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

module.exports = Edit;

