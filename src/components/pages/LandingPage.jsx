import {Link} from "react-router-dom";

export default function HomePage(){
    return (
        <div className="nim-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">
                Welcome to My Blog App
            </h1>
            <p className="text-gray-600 max-w-xl mb-8">
                A platform where you can create blog posts, read content, and explore posts.
            </p>
            <div>
                <Link
                    to="/login"
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                    Login
                    
                </Link>

                <Link
                    to="/posts"
                    className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
                >
                    Explore Blog
                </Link>
            </div>
        </div>
    );
}