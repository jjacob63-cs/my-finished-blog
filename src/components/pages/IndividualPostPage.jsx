// src/pages/IndividualPost.jsx
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../CommentForm";
import { AuthContext } from "../AuthenticationContext";

export default function IndividualPost() {
  const { id } = useParams(); // matches App.jsx route
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user: authUser} = useContext(AuthContext);

  // Fetch post and user
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then(res => res.json())
      .then(userData => setUser(userData))
      .catch(err => setError('Failed to load post or user'))
      .finally(() => setLoading(false));
  }, [id]);

  // Fetch comments
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error('Failed to load comments:', err));
  }, [id]);

  if (loading)
    return <p className="text-center text-lg animate-pulse">Loading post...</p>;
  if (error)
    return <p className="text-red-500 text-center font-semibold">{error}</p>;
  if (!post) return <p className="text-center font-semibold">Post not found</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>

      {user ? (
        <div className="mb-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Author: {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-gray-500 mb-6">Author information unavailable</p>
      )}

      <h2 className="text-2xl font-semibold mb-2">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map(c => (
          <div key={c.id} className="border-b py-2">
            <p className="font-semibold">{c.name}</p>
            <p>{c.body}</p>
          </div>
        ))
      )}

      <div className="mt-6">
        {authUser ? (
          <CommentForm postId={id} setComments={setComments} />
        ) : (
          <p className="text-red-500 font-medium">
            Please log in to write a comment.
          </p>
        )}
      </div>
    </div>
  );
}