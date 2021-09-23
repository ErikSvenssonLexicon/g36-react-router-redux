const PatientForm = (props) => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" />
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="col-md-6">
        <label htmlFor="pnr">Personal Number</label>
        <input type="text" className="form-control" id="pnr" />
      </div>
      <div className="col-md-6">
        <label htmlFor="gender">
          Gender
        </label>
        <select className="form-select" id="gender">
          <option selected value="FEMALE">
            female
          </option>
          <option value="MALE">male</option>
        </select>
      </div>
    </form>
  );
};

export default PatientForm;
