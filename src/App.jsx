import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Navbar from "./Components/Navigation/Navbar";
import Project from "./Pages/project";
import TechStack from "./Pages/techstack";
import Contact from "./Pages/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
