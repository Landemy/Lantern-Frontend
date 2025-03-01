
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Body from "./layout/body/Body";
import PricePlan from "./frontend/components/Price&Plan"; // Import the Price & Plan page
import BlogList from "./frontend/components/Resourses";
import BlogPost from "./frontend/components/Resources_Single";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/pricing-plan" element={<PricePlan />} />
        <Route path="/resources" element={<BlogList />} />
        <Route path="/resources/resource/:resourceId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
