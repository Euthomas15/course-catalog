import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <p>© 2026 TJ Courses. Keep learning, one step at a time.</p>
      </footer>
    </>
  );
}

export default App;
