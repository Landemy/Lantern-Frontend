// import Body from "./layout/body/Body"
// import Navbar from "./layout/header/Navbar"


// function App() {

//   return (
//     <>
//       <Navbar />
//       <Body />
      
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Body from "./layout/body/Body";
import PricePlan from "./frontend/components/Price&Plan"; // Import the Price & Plan page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/pricing-plan" element={<PricePlan />} />
      </Routes>
    </Router>
  );
}

export default App;
