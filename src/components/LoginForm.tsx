import { useState } from "react";
import { logIn } from "../services/user-service";

interface Props {
  property: string;
}

interface SignupProps {
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginForm({ setShowSignup }: SignupProps) {
  const changeToSignup = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowSignup(true);
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChangeInForm = (
    event: React.ChangeEvent<HTMLInputElement>,
    { property }: Props
  ) => {
    setData({ ...data, [property]: event.target.value });
  };
  const handleSubmit = () => {
    logIn(data)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="loginbox">
        <div className="loginbox">
          <div className="rectangle">
            <h1>Welcome</h1>
            <div>
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Email"
                onChange={(e) => handleChangeInForm(e, { property: "email" })}
              />
            </div>
            <div>
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Password"
                onChange={(e) =>
                  handleChangeInForm(e, { property: "password" })
                }
              />
            </div>

            <div className="checkboxline">
              <div>
                <input
                  type="checkbox"
                  className="checkboxlineinput"
                  name="landlord"
                  id="landlordcheckbox"
                />
                <label htmlFor="landlordcheckbox">Landlord</label>
              </div>
              <a href="">Forgot password?</a>
            </div>

            <button className="loginbtn" type="button" onClick={handleSubmit}>
              Log in
            </button>
            <p>
              Don't have an account?{" "}
              <a href="" onClick={changeToSignup}>
                Sign up
              </a>
            </p>
            <p className="or">OR</p>
            <button>Countinue with Google</button>
            <button>Countinue with Facebook</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
