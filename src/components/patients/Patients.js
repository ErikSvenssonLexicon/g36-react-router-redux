import { Link, NavLink } from "react-router-dom";

const patients = [
  {
    id: 1,
    pnr: "200101012324",
    firstName: "Nils",
    lastName: "Andersson",
    birthDate: "2001-01-01",
    gender: "MALE",
  },
  {
    id: 2,
    pnr: "199001014354",
    firstName: "Anna",
    lastName: "Nilsson",
    birthDate: "1990-01-01",
    gender: "FEMALE",
  },
];

const Patients = (props) => {
  const noPatients = <p className="text-center">No patients found...</p>;
  const patientsContent = patients.map((patient) => {
    return (
      <tr key={patient.id}>
        <td className="align-middle">{patient.firstName}</td>
        <td className="align-middle">{patient.lastName}</td>
        <td className="align-middle">{patient.birthDate}</td>
        <td className="align-middle">
          {patient.gender === "FEMALE" ? "female" : "male"}
        </td>
        <td className="align-middle">
          <NavLink  className="btn btn-sm btn-primary" to={`/patients/${patient.id}`}>
            Details
          </NavLink>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Patients page</h1>
      {patientsContent.length > 1 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Gender</th>
              <th scope="col">Links</th>
            </tr>
          </thead>
          <tbody>{patientsContent}</tbody>
        </table>
      ) : (
        { noPatients }
      )}

      <Link to="/premises">
        <button className="btn btn-primary">To Premises</button>
      </Link>
    </div>
  );
};

export default Patients;
