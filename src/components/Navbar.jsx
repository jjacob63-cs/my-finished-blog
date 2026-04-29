import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>
                Toggle {theme === "light" ? "Dark" : "Light"}
            </button>
            <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}