import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import Video from "./Video.js"; 
import "./App.css";

function App() {

  /*
    Tech Usage:
      FrontEnd:
          REACT
          Firebase hosting
          Flexbox
          3rd Party Ticker
          Scroll snap
      Backend:
          Node.js
          Express.js server
          MongoDB
          mongoose
          Heroku hosting
  */

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  //Firebase hosting URL: https://tiktok-clone-ad6fc.web.app

  return (
    <div className = "app">
      <div className = "app__videos">
        {
          videos.map((video) => (
            <Video srcURL = {video.srcURL}
               channel = {video.channel}
               description = {video.description}
               song = {video.song}
               likes = {video.likes}
               shares = {video.shares} 
               messages = {video.messages}
               />
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
