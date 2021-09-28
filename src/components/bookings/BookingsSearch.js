import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Bookings from "./Bookings";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const BookingsSearch = (props) => {
  const [search, setSearch] = useState("all");
  const [value, setValue] = useState("");
  const [url, setUrl] = useState(null);
  const [bookings, setBookings] = useState([]);
  const { currentPatient } = useSelector((state) => state.currentPatient);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setUrl(
      `http://localhost:8080/api/v1/bookings?search=${search}&value=${value}`
    );
  };

  const fetchData = (url) => {
    axios
      .get(url)
      .then((response) => {        
        setBookings(response.data);
      })
      .catch((error) => console.log(error));
  };

  const bookVaccine = (id) => {
    
  }

  useEffect(() => {
    if (!currentPatient) {
      history.push("/welcome");
    }
  }, [currentPatient, history]);

  useEffect(() => {
    if (!url) return;

    fetchData(url);
  }, [url]);

  return (
    <Fragment>
      <div className="card-header bg-success bg-opacity-75 text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="m-0">Search bookings:</h5>
          </div>
          <form className="d-flex gap-1" onSubmit={onSubmit}>
            <div className="d-flex">
              <select
                className={`form-select`}
                id="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              >
                <option value="all">All Bookings</option>
                <option value="city">All Bookings by city</option>
              </select>
            </div>
            <div>
              <input
                className="form-control"
                type="text"
                name="value"
                value={value}
                placeholder="Search..."
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      {bookings && bookings.length > 0 && currentPatient && (
        <Bookings currentPatient={currentPatient} bookings={bookings} />
      )}
    </Fragment>
  );
};

export default BookingsSearch;
