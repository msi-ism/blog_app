const React = require("react");
const ReactDom = require("react-dom");
const Navbar = require("../components/Navbar");


class New extends React.Component {
    render(){
        const { loggedInUser } = this.props;
        console.log("home" + loggedInUser);
        return(
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
                <span className="question-txt">Write a note to help your future self: </span>
              </p>
              <div class="post-it">
                <h2 className="post-it-title">Note to Self:</h2>
                <form action='/blog' method='POST'>
                    <textarea type='text' name='title' className="input-box-title" placeholder="Title (30 character max)" maxLength={30}/>
                    <textarea name='body' className="input-box" type="text" placeholder="What's on your mind?"></textarea>
                    <input className='note-submit' type='submit' value='Submit note!' />
                </form>
              </div>
            </div>
          </div>

        )
    }
}

module.exports = New

{/* <div>
<h1>Create New Blog</h1>
<form action='/blog' method='POST'>
     title: <input type='text' name='title'   /> 
     <br />            
     body: <input type='text' name='body' /> 
     <br />
     <input type='submit' value='Create new post!' />
</form>
</div> */}