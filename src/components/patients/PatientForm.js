import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPatient } from "../../store/redux-actions";
import { useHistory } from "react-router";
import {
  removeCurrentPatient,
  setError,
} from "../../store/currentPatientSlice";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const PatientForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");
  const [gender, setGender] = useState("FEMALE");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
  const history = useHistory();

  const dispatch = useDispatch();
  const { currentPatient, error, isLoading } = useSelector(
    (state) => state.currentPatient
  );

  useEffect(() => {
    console.log("Cleaning");
    dispatch(setError(null));
    dispatch(removeCurrentPatient(null));
  }, [dispatch]);

  const {
    firstNameErrors = [],
    lastNameErrors = [],
    pnrErrors = [],
    genderErrors = [],
    birthDateErrors = [],
    emailErrors = [],
    phoneErrors = [],
  } = error ? error : {};

  const validationFeedback = (messages) => {
    if (messages && messages.length === 0 && error) {
      return <div className="valid-feedback">OK</div>;
    }
    if (messages && messages.length > 0 && error) {
      return <div className="invalid-feedback">{messages.join(", ")}</div>;
    }
  };

  const setValidationClass = (messages) => {
    if (!error && messages.length === 0) {
      return "";
    }
    if (error && messages.length > 0) {
      return "is-invalid";
    } else {
      return "is-valid";
    }
  };

  useEffect(() => {
    if (currentPatient) {
      history.push("/patients/" + currentPatient.pnr);
    }
  }, [currentPatient, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const patient = {
      pnr: pnr,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      gender: gender,
      contactInfo: {
        email: email,
        phone: phone,
      },
    };
    dispatch(addNewPatient({ patient: patient }));
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Please fill in this form:</h5>
              <Link to="/welcome" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="row g-3 p-1">
            <div className="col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={`form-control ${setValidationClass(
                  firstNameErrors
                )}`}
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              {validationFeedback(firstNameErrors)}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={`form-control ${setValidationClass(lastNameErrors)}`}
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              {validationFeedback(lastNameErrors)}
            </div>
            <div className="col-md-4">
              <label htmlFor="pnr">Personal Number</label>
              <input
                type="text"
                className={`form-control ${setValidationClass(pnrErrors)}`}
                id="pnr"
                onChange={(e) => setPnr(e.target.value)}
                value={pnr}
              />
              {validationFeedback(pnrErrors)}
            </div>
            <div className="col-md-4">
              <label htmlFor="gender">Gender</label>
              <select
                className={`form-select ${setValidationClass(genderErrors)}`}
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="FEMALE">female</option>
                <option value="MALE">male</option>
              </select>
              {validationFeedback(genderErrors)}
            </div>
            <div className="col-md-4">
              <label htmlFor="birthDate">Birth Date</label>
              <input
                className={`form-control ${setValidationClass(
                  birthDateErrors
                )}`}
                type="date"
                id="birthDate"
                min="1910-01-01"
                max="2020-01-01"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
              />
              {validationFeedback(birthDateErrors)}
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input
                className={`form-control ${setValidationClass(emailErrors)}`}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {validationFeedback(emailErrors)}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone">Phone number (optional)</label>
              <input
                className={`form-control ${setValidationClass(phoneErrors)}`}
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {validationFeedback(phoneErrors)}
            </div>
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default PatientForm;
