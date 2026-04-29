import { useState } from "react";

export default function CommentForm({ postId, setComments }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !body) {
      setError("Both fields are required");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify({ name, body, postId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => [...prev, data]);
        setName("");
        setBody("");
        setError("");
      })
      .catch(() => setError("Failed to post comment"));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}