import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Award from "./Award";
import Lessons from "./Lessons";
import Contact from "./Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/" element={<About />} />
        <Route path="/award/" element={<Award />} />
        <Route path="/lessons/" element={<Lessons />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;