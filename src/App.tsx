import Navbar from "./components/Navbar";
import { useState } from "react";

// import "./App.css";
import Body from "./components/Body";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <>
      <Navbar setShowSignup={setShowSignup}></Navbar>
      <Body showSignup={showSignup} setShowSignup={setShowSignup}></Body>
    </>
  );
}

export default App;
