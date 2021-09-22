import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const person = {
  id: 1,
  pnr: "200101012324",
  firstName: "Nils",
  lastName: "Andersson",
  birthDate: "2001-01-01",
  gender: "MALE",
  contactInfo: {
    id: 1,
    email: "nils.andersson@gmail.com",
    phone: "070-1234567",
  },
  bookings: [
    {
      id: 1,
      dateTime: "2022-07-11T13:35",
      price: 0,
      administratorId: null,
      vaccineType: "covid 19",
      vacant: false,
    },
  ],
};

const PatientDetail = (props) => {
  const params = useParams();
  const id = params.patientId;

  useEffect(() => {
    console.log(id);
  }, [id]);

  const bookingsContent = person.bookings.map((booking) => {
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
        <div className="card-body">
          <h5 className="card-title text-center">{`${person.firstName} ${person.lastName}`}</h5>

          <div className="p-1 bg-success rounded-3">
            <div className="row justify-content-center mx-auto border border-bottom-1">
              <div className="col-6 text-center bg-light p-2">
                <span>SSN:</span>
              </div>
              <div className="col-6 text-center bg-light p-2">
                <span>{person.pnr}</span>
              </div>
            </div>
            <div className="row justify-content-center mx-auto border border-bottom-1">
              <div className="col-6 text-center bg-light p-2">
                <span>Birth Date:</span>
              </div>
              <div className="col-6 text-center bg-light p-2">
                <span>{person.birthDate}</span>
              </div>
            </div>
            <div className="row justify-content-center mx-auto border border-bottom-1">
              <div className="col-6 text-center bg-light p-2">
                <span>Gender:</span>
              </div>
              <div className="col-6 text-center bg-light p-2">
                <span>{person.gender === "FEMALE" ? "female" : "male"}</span>
              </div>
            </div>
            <div className="row justify-content-center mx-auto border border-bottom-1">
              <div className="col-6 text-center bg-light p-2">
                <span>Email:</span>
              </div>
              <div className="col-6 text-center bg-light p-2">
                <span>{person.contactInfo.email}</span>
              </div>
            </div>
            <div className="row justify-content-center mx-auto border border-bottom-1">
              <div className="col-6 text-center bg-light p-2">
                <span>Phone:</span>
              </div>
              <div className="col-6 text-center bg-light p-2">
                <span>{person.contactInfo.phone}</span>
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
              <p className="text-center">Not bookings...</p>
            )}
          </div>
          <div className="row justify-content-between mx-auto mt-2">
            <Link to="/bookings" className="btn btn-success btn-small mb-2">
              Book
            </Link>
            <button className="btn btn-outline-danger btn-small">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
