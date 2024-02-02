import logo from "../assets/logo.png";

import sidebar from "../assets/sidebar.svg";
interface SignupProps {
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setShowSignup }: SignupProps) {
  const changeToLogin = () => {
    setShowSignup(false);
  };
  const changeToSignup = () => {
    setShowSignup(true);
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <img className="siderbar" src={sidebar} alt="sidebar_logo" />
      </div>
      <div className="nav-item">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-item">
        <div>
          <button className="login" onClick={changeToLogin}>
            Log in
          </button>
          <button className="signup" onClick={changeToSignup}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
