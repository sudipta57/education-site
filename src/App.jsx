import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/view-pricing" element={<Pricing />} />

        <Route  path="/our-course" element={<Courses />} />
        <Route  path="/about-us" element={<About />} />
        <Route  path="/contact-us" element={<Contact />} />
        <Route  path="/sign-up" element={<SignUp />} />
        <Route  path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
