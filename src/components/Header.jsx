import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div className="logo">📝 My Blog</div>
      <nav>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;