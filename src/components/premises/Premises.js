import { Link } from "react-router-dom";

const Premises = (props) => {
  return (
    <div>
      <h1>Premises page</h1>
      <ul>
        <li>North</li>
        <li>South</li>
        <li>West</li>
        <li>East</li>
      </ul>

      <Link to="/patients"><button>To Patients</button></Link>
    </div>
  );
};

export default Premises;


