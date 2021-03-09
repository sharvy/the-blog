import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import { API_SERVER } from "../constants";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(`${API_SERVER}/posts`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
