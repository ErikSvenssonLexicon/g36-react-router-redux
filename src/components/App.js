import Premises from "./premises/Premises";
import WelcomePage from "./WelcomePage";
import { Route, Switch, Redirect } from "react-router";
import PatientDetail from "./patients/PatientDetails";
import Card from "./ui/Card";
import PatientForm from "./patients/PatientForm";
import BookingsSearch from "./bookings/BookingsSearch";
import Bookings from "./bookings/Bookings";
import BookingDetail from "./bookings/BookingDetail";

const App = (props) => {
  return (
    <Switch>
      <Route path="/welcome" exact>
        <div className="container">
          <WelcomePage />
        </div>
      </Route>
      <Route path="/logout">
        <Redirect to="/welcome" />
      </Route>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/bookings" exact>
        <div className="container">
          <Card>
            <BookingsSearch />            
          </Card>
        </div>
      </Route>
      <Route path="/bookings/:id">
        <div className="container">
            <Card>
              <BookingDetail />
            </Card>
        </div>
      </Route>
      <Route path="/patients/add" exact>
        <div className="container">
          <Card>
            <PatientForm />
          </Card>
        </div>
      </Route>
      <Route path="/patients/:pnr">
        <div className="container">
          <Card>
            <PatientDetail />
          </Card>
        </div>
      </Route>
      <Route path="/premises" exact>
        <div className="container">
          <Card>
            <Premises />
          </Card>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
