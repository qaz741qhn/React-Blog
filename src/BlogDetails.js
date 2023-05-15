import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = (id) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not delete the blog");
        } else {
          console.log("blog deleted");
          history.push("/")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>Blog Details - {blog.id}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </article>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default BlogDetails;
