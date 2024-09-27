import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import News from "./pages/News";
import TeamPage from "./pages/TeamPage";
import NewsDetail from "./pages/NewsDetail";
import SubmitCv from "./pages/SubmitCv";
import Jobs from "./pages/Jobs";
import Message from "./pages/Message";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities/:slug" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/detail/:id" element={<NewsDetail />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/submit-cv" element={<SubmitCv />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/message" element={<Message />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
