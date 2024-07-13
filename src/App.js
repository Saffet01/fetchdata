import "./App.css";
import { useEffect, useState } from "react";
import { Post } from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({title: "", body: ""});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postId = {...newPost, id: posts.length + 1};
    setPosts([postId, ...posts]);
    setNewPost({title: "", body: ""})
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewPost({...newPost, [name] : value});
  }

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <form onSubmit={handleSubmit}>
        <input className="input-field" name="title" type="text" value={newPost.title} onChange={handleInputChange} placeholder="Title" required/>
        <textarea className="body-field" name="body" value={newPost.body} onChange={handleInputChange}  placeholder="Content" required></textarea>
        <button className="add-button" type="submit">Add Post</button>
      </form>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} onDelete={handleDeletePost} />
        ))}
      </div>
    </div>
  );
}

export default App;
