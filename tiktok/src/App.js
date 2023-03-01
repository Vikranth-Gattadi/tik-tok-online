import './App.css';
import Videos from "./Videos.js"
import axios from "./axios"
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tiktok/posts");

      setPosts(req.data);
    };
    fetchData();
  }, [])
  return (
    <div className="app">
      <div className="app-videos">
        {posts.map((post) => (
        <Videos url={post.url} name={post.channel} desp={post.desp} song={post.song} likes={post.likes} chats={post.chats} shares={post.shares} />
        ))}
      </div>
    </div>
  );
}

export default App;
