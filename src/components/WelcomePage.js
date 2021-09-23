import { useState, useEffect, Fragment } from "react";
import LoginForm from "./login/LoginForm";
import Card from "./ui/Card";
import { Link } from "react-router-dom";



const WelcomePage = (props) => {
  const [loginIsVisible, setLoginIsVisible] = useState(false);
  const [loginButtonText, setLoginButtonText] = useState(""); 

  useEffect(() => {
    if (!loginIsVisible) {
      setLoginButtonText("Login");
    } else {
      setLoginButtonText("Hide");
    }
  }, [loginIsVisible]);

  return (
    <Fragment>
      <div className="p-5 mb-4 bg-success rounded-3 text-white">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Immunity Vaccine booking</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <div className="d-grid gap-3">
            <Link to="/patients/add" className="btn btn-primary btn-lg">
              Register
            </Link>
            <button
              onClick={() => setLoginIsVisible(!loginIsVisible)}
              className="btn btn-info btn-lg text-white"
            >
              {loginButtonText}
            </button>
          </div>
        </div>
      </div>

      {loginIsVisible && (
        <Card>
          <LoginForm />
        </Card>
      )}
    </Fragment>
  );
};

export default WelcomePage;
