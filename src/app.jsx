import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contacts";
import More from "./pages/more";
import Stagger from "./Stagger";
import Box_animations from "./Box_animations";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main className="mx-10 mt-10">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/home" element={<More />} />
        <Route path="/stagger" element={<Stagger />} />
        <Route path="/boxes" element={<Box_animations />} />
      </Routes>
    </main>
  );
};

export default App;
