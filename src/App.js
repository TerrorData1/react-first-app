import { Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Bizness from "./components/Bizness";
import Service from "./components/Service";
import Blog from "./components/Blog";


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bizness" element={<Bizness />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
