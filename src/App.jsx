import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPostsPage from "./components/pages/BlogPostsPage";
import IndividualPostPage from "./components/pages/IndividualPostPage";
import ContactPage from "./components/pages/ContactPage";
import { ThemeProvider } from "./components/ThemeContext";
import { AuthProvider } from './components/AuthenticationContext';
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/LandingPage";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="container mx-auto">
            <Header />
            <Navbar />

            <main className="p-4">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route 
                  path="/post/:id" 
                  element={
                    <ProtectedRoute>
                      <IndividualPostPage />
                    </ProtectedRoute>
                  } />
                <Route
                  path="/posts"
                  element={
                    <ProtectedRoute>
                      <BlogPostsPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/contact" element={<ContactPage />} /> 
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}