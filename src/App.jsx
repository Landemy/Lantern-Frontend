import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Body from "./layout/body/Body";
import PricePlan from "./frontend/components/Price&Plan";
import BlogList from "./frontend/components/Resourses";
import BlogPost from "./frontend/components/Resources_Single";
import { Login } from "./frontend/account/Login";
import React from "react";

function AppLayout() {
  const location = useLocation();

  // Paths where Navbar should be hidden
  const hideNavbarPaths = ["/login"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/pricing-plan" element={<PricePlan />} />
        <Route path="/resources" element={<BlogList />} />
        <Route path="/resources/resource/:resourceId" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
