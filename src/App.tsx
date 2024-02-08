import Navbar from "./components/Navbar";
import { useState } from "react";

// import "./App.css";
import Body from "./components/Body";
// import HouseCarousel from "./components/HouseCarousel";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showHome, setShowHome] = useState(true);
  return (
    <>
      {/* <HouseCarousel></HouseCarousel> */}
      <Navbar setShowSignup={setShowSignup} setShowHome={setShowHome}></Navbar>
      <Body
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        showHome={showHome}
      ></Body>
    </>
  );
}

export default App;
