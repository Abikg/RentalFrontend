import LoginPageImage from "./LoginPageImage";
import Signup from "./Signup";
import Home from "./Home";

import LoginForm from "./LoginForm";
// import { useState } from "react";
interface BodyProps {
  showSignup: boolean;
  showHome: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Body({ showSignup, setShowSignup, showHome }: BodyProps) {
  return (
    <>
      <body className="loginpagebody">
        {/* if ({showHome}) {} */}
        {showHome && <Home></Home>}
        {!showHome && (
          <>
            <LoginPageImage></LoginPageImage>
            {showSignup ? (
              <Signup setShowSignup={setShowSignup}></Signup>
            ) : (
              <LoginForm setShowSignup={setShowSignup}></LoginForm>
            )}
          </>
        )}
      </body>
    </>
  );
}

export default Body;
