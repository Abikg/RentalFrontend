import logo from "../assets/logo.png";
import { isLoggedIn } from "../auth";
// import { getEmail } from "../services/helper";
import { doLogout } from "../auth";

import sidebar from "../assets/sidebar.svg";
interface SignupProps {
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHome: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setShowSignup, setShowHome }: SignupProps) {
  const changeToLogin = () => {
    setShowSignup(false);
    setShowHome(false);
  };
  const changeToSignup = () => {
    setShowSignup(true);
    setShowHome(false);
  };
  const goToHome = () => {
    setShowHome(true);
  };
  const handleLogout = () => {
    doLogout(() => console.log("user logged in and stored"));
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <img className="siderbar" src={sidebar} alt="sidebar_logo" />
      </div>
      <div className="nav-item">
        <img className="logo" src={logo} alt="logo" onClick={goToHome} />
      </div>
      <div className="nav-item">
        {!isLoggedIn() ? (
          <>
            <div>
              <button className="login" onClick={changeToLogin}>
                Log in
              </button>
              <button className="signup" onClick={changeToSignup}>
                Sign up
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
              {/* <p
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Livvic",
                  marginRight: "8px",
                }}
              >
                {getEmail()}
              </p> */}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
