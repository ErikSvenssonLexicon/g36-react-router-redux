import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findPatientByPnr } from "../../store/redux-actions";
import Spinner from "../ui/Spinner";

const PatientDetail = (props) => {
  const params = useParams();
  const pnr = params.pnr;
  const { currentPatient, isLoading, error } = useSelector(
    (state) => state.currentPatient
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if(!currentPatient){
      dispatch(findPatientByPnr(pnr));
    }
    
  }, [pnr, dispatch, currentPatient]);

  const bookingsContent =
    currentPatient &&
    currentPatient.bookings.map((booking) => {
      return (
        <tr key={booking.id}>
          <td className="align-middle">{booking.dateTime.replace("T", " ")}</td>
          <td className="align-middle">{booking.vaccineType}</td>
          <td className="align-middle">{`${
            booking.price === 0 ? "free" : booking.price + " SEK"
          }`}</td>
          <td className="align-middle">
            <Link
              to={`/bookings/${booking.id}`}
              className="btn btn-primary btn-sm"
            >
              Details
            </Link>
          </td>
        </tr>
      );
    });

  return (
    <div className="row justify-content-center">
      <div className="card" style={{ width: "40rem" }}>
        {currentPatient && !isLoading && (
          <div className="card-body">
            <h5 className="card-title text-center">{`${currentPatient.firstName} ${currentPatient.lastName}`}</h5>

            <div className="p-1 bg-success rounded-3">
              <div className="row justify-content-center mx-auto border border-bottom-1">
                <div className="col-6 text-center bg-light p-2">
                  <span>SSN:</span>
                </div>
                <div className="col-6 text-center bg-light p-2">
                  <span>{currentPatient.pnr}</span>
                </div>
              </div>
              <div className="row justify-content-center mx-auto border border-bottom-1">
                <div className="col-6 text-center bg-light p-2">
                  <span>Birth Date:</span>
                </div>
                <div className="col-6 text-center bg-light p-2">
                  <span>{currentPatient.birthDate}</span>
                </div>
              </div>
              <div className="row justify-content-center mx-auto border border-bottom-1">
                <div className="col-6 text-center bg-light p-2">
                  <span>Gender:</span>
                </div>
                <div className="col-6 text-center bg-light p-2">
                  <span>
                    {currentPatient.gender === "FEMALE" ? "female" : "male"}
                  </span>
                </div>
              </div>
              <div className="row justify-content-center mx-auto border border-bottom-1">
                <div className="col-6 text-center bg-light p-2">
                  <span>Email:</span>
                </div>
                <div className="col-6 text-center bg-light p-2">
                  <span>{currentPatient.contactInfo.email}</span>
                </div>
              </div>
              <div className="row justify-content-center mx-auto border border-bottom-1">
                <div className="col-6 text-center bg-light p-2">
                  <span>Phone:</span>
                </div>
                <div className="col-6 text-center bg-light p-2">
                  <span>{currentPatient.contactInfo.phone}</span>
                </div>
              </div>
              {bookingsContent.length > 0 ? (
                <table className="table mt-1 mb-0 bg-light">
                  <thead>
                    <tr>
                      <th scope="col">Date and time:</th>
                      <th scope="col">Vaccine:</th>
                      <th scope="col">Price:</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>{bookingsContent}</tbody>
                </table>
              ) : (
                <p className="text-center">No bookings...</p>
              )}
            </div>
            <div className="row justify-content-between mx-auto mt-2">
              <Link to="/bookings" className="btn btn-success btn-small mb-2">
                Book
              </Link>
              <button className="btn btn-outline-danger btn-small">
                Delete Account
              </button>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="card-body">
            <Spinner />
          </div>
        )}
        {error && !isLoading && (
          <div className="card-body">
            <h4 className="text-danger text-center">{error.message}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetail;
