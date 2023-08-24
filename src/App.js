import React, { useState, useEffect } from "react";
import Preloader from "./component/Pre";
import Navbar from "./component/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./component/Footer";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import "./Style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <HashRouter basename="/">
    //   <Preloader load={load} />
    //   <div className="App" id={load ? "no-scroll" : "scroll"}>
    //     <Navbar />
    //     <ScrollToTop />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="*" element={<Navigate to="/" />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </HashRouter>
  );
}

export default App;
