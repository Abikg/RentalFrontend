import { useEffect, useState } from "react";

import { signUp } from "../services/user-service";

interface Props {
  property: string;
}
interface SignupProps {
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

function Signup({ setShowSignup }: SignupProps) {
  const changeToLogin = () =>
    // event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    {
      // event.preventDefault();
      setShowSignup(false);
    };

  // const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(400);

  // const [error, setError] = useState({
  //   errors: {},
  //   isError: false,
  // });
  // const changeInputCss = () => {
  //   const newClassName = "shifted-placeholder-modified";
  //   const inputElement = document.querySelector(".shifted-placeholder");
  //   if (inputElement) {
  //     // Modify CSS properties
  //     inputElement.className = newClassName;
  //   }
  // };
  useEffect(() => {
    if (submissionStatus === 200) {
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [submissionStatus]);

  // },[handleSubmit]);
  const handleChangeInForm = (
    event: React.ChangeEvent<HTMLInputElement>,
    { property }: Props
  ) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = () => {
    signUp(data)
      .then((resp) => {
        console.log(resp);
        setSubmissionStatus(200);
      })
      .catch((error) => {
        console.log(error);
        // setError({
        //   errors: error,
        //   isError: true,
        // });
        // setErrorMessage("please Enter value");
      });
  };

  // const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
  //   const { validity } = e.target;
  //   if (validity.valueMissing) {
  //     setErrorMessage("Please enter a value.");
  //   } else {
  //     setErrorMessage("Invalid input.");
  //   }
  // };
  // const inputClass = error.isError
  //   ? "shifted-placeholder-modified"
  //   : "shifted-placeholder";
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <form className="loginbox">
        <div className="loginbox">
          <div className="rectangle">
            <h1>Welcome</h1>
            <div className="namesignup">
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="First Name"
                onChange={(e) =>
                  handleChangeInForm(e, { property: "firstName" })
                }
                value={data.firstName}
                required
                // onInvalid={handleInvalid}
                // onInput={() => setErrorMessage("")}
              />

              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Last Name"
                onChange={(e) =>
                  handleChangeInForm(e, { property: "lastName" })
                }
                value={data.lastName}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Email"
                onChange={(e) => handleChangeInForm(e, { property: "email" })}
                value={data.email}
                required
              />
            </div>
            <div className="namesignup">
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Password"
                onChange={(e) =>
                  handleChangeInForm(e, { property: "password" })
                }
                value={data.password}
                required
              />
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Confirm Password"
                onChange={(e) =>
                  handleChangeInForm(e, { property: "confirmPassword" })
                }
                value={data.confirmPassword}
                required
              />
            </div>
            {/* <div>
              <input
                type="text"
                className="shifted-placeholder"
                placeholder="Phone"
              />
            </div> */}

            <div className="checkboxline">
              <div>
                <input type="checkbox" name="landlord" id="landlordcheckbox" />
                <label htmlFor="landlordcheckbox">Landlord</label>
              </div>
              <a href="">Forgot password?</a>
            </div>

            <button className="loginbtn" type="button" onClick={handleSubmit}>
              Sign up
            </button>
            <p>
              Aleady have a account?{" "}
              <a href="" onClick={changeToLogin}>
                Log in
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

export default Signup;
