const ButtonSpinner = (props) => {
  return (
    <button className="btn btn-lg btn-success" type="submit" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Checking...
    </button>
  );
};

export default ButtonSpinner;
