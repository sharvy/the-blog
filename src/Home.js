import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", body: "lorem ipsum...", author: "mario 1", id: 1 },
    { title: "Blog 2", body: "lorem ipsum...", author: "mario 2", id: 2 },
    { title: "Blog 3", body: "lorem ipsum...", author: "mario 3", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use Effect Working...")
  }, [])

  return (
    <div className="home">
      <h2>Homepage</h2>
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
