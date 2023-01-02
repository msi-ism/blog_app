const React = require("react");
const ReactDom = require('react-dom')
const Navbar = require("../components/Navbar");
import { useState, useEffect, useRef } from "react";

// const [color, setColor] = useState(null)


const handleClick = () => {
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        // 👉️ can use alert()
      } else {
        console.log('You are on the server')
        // 👉️ can't use alert()
      }
};

handleClick()

const New = ({loggedInUser}) => {
    
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
          <form action="/blog" method="POST">
            <textarea
              autoFocus
              type="text"
              name="title"
              className="input-box-title"
              placeholder="Title (30 character max)"
              maxLength={30}
            ></textarea>
            <textarea
              name="body"
              className="input-box"
              type="text"
              placeholder="What's on your mind?"
              maxLength={100}
            ></textarea>
            <div className="new-note-bottom">
              {/* <div className="color-picker">
                <button
                  type="button"
                  onClick={changeBlue}
                  id="yellow-dot"
                  className="dot"
                ></button>
                <span id="blue-dot" class="dot"></span>
                <span id="green-dot" class="dot"></span>
                <span id="pink-dot" class="dot"></span>
              </div> */}
              <input
                className="note-submit"
                type="submit"
                value="Submit note!"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

module.exports = New;

{
  /* <div>
<h1>Create New Blog</h1>
<form action='/blog' method='POST'>
     title: <input type='text' name='title'   /> 
     <br />            
     body: <input type='text' name='body' /> 
     <br />
     <input type='submit' value='Create new post!' />
</form>
</div> */
}
