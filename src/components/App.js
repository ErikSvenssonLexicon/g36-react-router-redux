import LoginForm from "./login/LoginForm";
import Patients from "./patients/Patients";
import Premises from "./premises/Premises";
import WelcomePage from "./WelcomePage";
import { Route, Switch } from "react-router";
import PatientDetail from "./patients/PatientDetails";
import Card from "./ui/Card";

const App = (props) => {
  return (
    <Switch>
      <Route path="/welcome" exact>
        <div className="container">
          <Card>
            <LoginForm />
            <WelcomePage />
          </Card>
        </div>
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
            <h1>New Patient form page</h1>
          </Card>
        </div>
      </Route>
      <Route path="/patients/:patientId">
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
