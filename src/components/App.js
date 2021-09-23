import Patients from "./patients/Patients";
import Premises from "./premises/Premises";
import WelcomePage from "./WelcomePage";
import { Route, Switch, Redirect } from "react-router";
import PatientDetail from "./patients/PatientDetails";
import Card from "./ui/Card";
import PatientForm from "./patients/PatientForm";

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
      <Route path="/patients" exact>
        <div className="container">
          <Card>
            <Patients />
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
