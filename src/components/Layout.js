import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main className="page_content">
        {location.pathname === "/" && <Slider />}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
