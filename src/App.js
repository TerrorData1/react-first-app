import { Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
