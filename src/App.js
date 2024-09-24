import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities/:slug" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
