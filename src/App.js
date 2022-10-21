import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [posts, changePosts] = useState([
    {
      postId: 1,
      username: "Viorel",
      body: "Where is my toothbrush?",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/43/66/71/1000_F_443667180_AaSXt7IPgZWYlnrfZ5X1kyfu0IbtL5dh.jpg",
      likes: 5,
      comments: [
        { username: "Mark", comment: "ha ha ha !" },
        { username: "George", comment: "testttt" },
      ],
    },
    {
      postId: 2,
      username: "Diana",
      body: "Meow!!!",
      image:
        "https://www.thesprucepets.com/thmb/uY68zr4-h8NjZjsaIJoayXyxtgY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Nebelung-21a92ba2210f49dfa06381162b6e68fe.jpg",
      likes: 23,
      comments: [{ username: "Michael", comment: "!!!" }],
    },
    {
      postId: 3,
      username: "Ross",
      body: "Please work!!!",
      image:
        "https://storage.googleapis.com/siteassetsswd/198/slideshow/663/20200625074107_56_o_1ba8en13b14c61b15hei1bd63jlc.jpg",
      likes: 11,
      comments: [{ username: "Gary", comment: "lol" }],
    },
  ]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/home" element={<Feed posts={posts || []} />} />
        <Route
          exact
          path="/newpost"
          element={<AddPost posts={posts} changePosts={changePosts} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

// <Navigation />
// <Feed />
export default App;
