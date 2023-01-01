const React = require("react");
const Navbar = require("../components/Navbar");


class New extends React.Component {
    render(){
        const { blogs, loggedInUser } = this.props;
        console.log("new" + loggedInUser);
        console.log('console working...')
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
              <div className="post-it">
                <h2 className="post-it-title">{"@"+ loggedInUser +"'s Note to Self:"}</h2>
                <form action='/blog' method='POST'>
                    <textarea autoFocus type='text' name='title' className="input-box-title" placeholder="Title (30 character max)" maxLength={30}></textarea>
                    <textarea name='body' className="input-box" type="text" placeholder="What's on your mind?" maxLength={50}></textarea>
                    <div className="new-note-bottom">
                        <div className="color-picker">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <input className='note-submit' type='submit' value='Submit note!' />
                    </div>
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