import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { AuthContext } from "../components/AuthenticationContext";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <div className="space-x-4 flex items-center">
                <button onClick={toggleTheme}>
                    Toggle {theme === "light" ? "Dark" : "Light"}
                </button>
                <nav className="space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                {user ? (
                    <>
                        <span className="font-semibold">
                            Hi, {user.username}
                        </span>

                        <button
                            onClick={logout}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}