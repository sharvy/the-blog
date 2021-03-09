import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_SERVER } from "../constants";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `${API_SERVER}/posts/${id}`
  );
  const history = useHistory();

  const onDelete = () => {
    fetch(`${API_SERVER}/posts/` + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={onDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
