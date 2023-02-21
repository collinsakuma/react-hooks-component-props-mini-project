import React from "react";
import blogData from "../data/blog";
import Headers from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Headers name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
