import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthenticationContext";

export default function BlogPosts() {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load posts');
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-lg animate-pulse">Loading posts...</p>;

  if (error)
    return <p className="text-red-500 text-center font-semibold">{error}</p>;

  if (posts.length === 0)
    return <p className="text-center font-semibold">No posts available.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Welcome {user?.username}, Blog Posts
      </h1>

      <p className="mb-6 text-gray-600">Latest articles</p>

      {posts.slice(0, 10).map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

          <p className="text-gray-700 mb-2">
            {post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}
          </p>

          <Link
            to={`/post/${post.id}`}
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}