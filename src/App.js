import React from 'react';
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          POSTS
        </div>
        <div className="col">
          FETCHED POSTS
        </div>
      </div>
      <h1>Header</h1>
    </div>
  );
}

export default App;
