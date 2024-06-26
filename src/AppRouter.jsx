import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import Error from "./pages/Error";
import PageTemplate from "./pages/PageTemplate";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
