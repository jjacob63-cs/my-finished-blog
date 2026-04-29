import CommentSection from "./CommentSection";

function BlogPost({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p className="meta">
      </p>
      <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
      <CommentSection postId={post.id}/>
    </div>
  );
}

export default BlogPost;