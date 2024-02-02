import LoginPageImage from "./LoginPageImage";
import Signup from "./Signup";

import LoginForm from "./LoginForm";
interface BodyProps {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Body({ showSignup, setShowSignup }: BodyProps) {
  return (
    <>
      <body className="loginpagebody">
        <LoginPageImage></LoginPageImage>
        {showSignup ? (
          <Signup setShowSignup={setShowSignup}></Signup>
        ) : (
          <LoginForm setShowSignup={setShowSignup}></LoginForm>
        )}
      </body>
    </>
  );
}

export default Body;
