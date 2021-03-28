import React, { useState, useEffect } from "react";
import axios from "axios";
import Flag from "../../../images/only-flag.jpg";
import Balcon from "../../../images/balcon.jpg";
import street from "../../../images/flag-street.jpg";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      await axios.get("http://localhost:5000/api/get").then((data) => {
        setPostList(data.data);
      });
    };

    getPost();
  }, []);

  return (
    <div className="home">
      <div className="bg">
        <h1>
          <span className="span1">Welco</span>me to F
          <span className="span2">rench</span>
        </h1>
      </div>

      <div className="home-content">
        <div className="left-content">
          <h1>Home</h1>

          <div className="img-flag">
            <img src={Flag} alt="FLAG" />
          </div>

          <div className="history">
            <h1>Know the history of France</h1>
            <span>22 de septiembre de 1792</span>
            <hr />
            <p>
              What is now France grew out of various peoples in the Iron Age,
              notably the largest and best organized of them: the Gallic Celtic.
              The subjugation of these peoples to Rome was gradual, as it took
              several centuries to impose their government, roads, commerce,
              culture, and even their language. Then the Gallo-Roman culture
              emerged, and Gaul was gradually integrated into the Roman Empire.
            </p>
            <Link to="/history">
              <button>View More</button>
            </Link>
          </div>

          <div className="experience">
            <h2>Tell your experiences</h2>
            <div className="post-cards">
              {postList.map((post, key) => {
                return (
                  <div
                    className="posts"
                    key={key}
                  >
                    <div className="posts-content">
                      <h3>{post.title}</h3>
                      <hr />
                      <span>{post.user_name}</span>
                      <p>
                        {post.post_text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rigth-content">
          <h1>Social Media</h1>
          <div className="social-media">
            <a href="https://github.com/Leandro-Rial">
              <i className="fab fa-github"></i>
            </a>
            <br></br>
            <br></br>
            <a href="https://www.linkedin.com/in/leandro-rial/">
              <i className="fab fa-linkedin"></i>
            </a>
            <div className="photos">
              <img src={Balcon} alt="img" />
              <img src={street} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <footer>&copy; 2021</footer>
    </div>
  );
};

export default Home;
