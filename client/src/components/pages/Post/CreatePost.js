import React, { useState } from "react";
import axios from 'axios';
import Arco from "../../../images/arco.jpg";
import "./createPost.css";

const CreatePost = () => {
  const [posts, setPosts] = useState({
    title: "",
    user_name: "",
    post_text: "",
  });

  const postInput = (e) => {
    const { name, value } = e.target;

    setPosts({ ...posts, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {

        await axios.post('http://localhost:5000/api/create', {...posts})

        window.location.href = '/'

    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="CreatePost">
      <div className="Post">
        <div className="image">
          <img src={Arco} alt="IMG" />
        </div>
        <form onSubmit={formSubmit}>
          <h1>Create Post</h1>

          <input
            type="text"
            name="user_name"
            placeholder="Username"
            value={posts.user_name}
            onChange={postInput}
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={posts.title}
            onChange={postInput}
            required
          />

          <textarea
            name="post_text"
            cols="30"
            rows="5"
            placeholder="À quoi tu penses?"
            value={posts.post_text}
            onChange={postInput}
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
