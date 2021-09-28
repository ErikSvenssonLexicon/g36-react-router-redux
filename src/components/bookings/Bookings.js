import Table from "../ui/Table";
import TableHead from "./../ui/TableHead";
import { Link } from "react-router-dom";
import TableBody from "../ui/TableBody";
import dateFormat from "dateformat";

const Bookings = ({ currentPatient = null, bookings = [] }) => {
  const rows = bookings.map(({ id, dateTime, price, vaccineType, vacant }) => {
    return (
      <tr className="align-middle" key={id}>
        <td>{dateTime.replaceAll("T", " @")}</td>
        <td>{`${price > 0 ? price + " SEK" : "Free"}`}</td>
        <td>{vaccineType}</td>
        <td className={`${vacant ? "text-success" : "text-danger"}`}>{`${
          vacant ? "Vacant" : "Not Vacant"
        }`}</td>
        <td>
          <Link className="btn btn-primary btn-sm" to={"/bookings/" + id}>
            Details
          </Link>
        </td>
        {vacant ? (
          <td>
            <button className="btn btn-success btn-sm">Book</button>
          </td>
        ) : (
          <td>
            <button className="btn btn-secondary btn-sm" disabled>
              Occupied
            </button>
          </td>
        )}
      </tr>
    );
  });

  const headers = [
    { text: "Date and Time", scope: "col" },
    { text: "Price", scope: "col" },
    { text: "Vaccine", scope: "col" },
    { text: "Vacant", scope: "col" },
    { text: "Link", scope: "col" },
    currentPatient && { text: "Action", scope: "col" },
  ];

  return (
    <Table className="table table-light">
      <TableHead headers={headers} />
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default Bookings;
