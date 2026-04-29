import { useState, useEffect } from "react";

function CommentSection({ postId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Load comments for this post from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    setComments(saved);
  }, [postId]);

  // Save comments whenever they change
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="comments" style={{ marginTop: "1rem" }}>
      <h3>Comments</h3>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleSubmit}>Submit</button>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentSection;