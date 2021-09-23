import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findPatientByPnr } from "../../store/redux-actions";
import { setError } from "../../store/currentPatientSlice";
import ButtonSpinner from "../ui/ButtonSpinner";


const LoginForm = (props) => {
    const dispatch = useDispatch();
    const {error, isLoading, currentPatient} = useSelector(state => state.currentPatient)    
    const [pnr, setPnr] = useState("");
    const history = useHistory();

    useEffect(()=>{
      dispatch(setError(null))
    },[dispatch])

    useEffect(()=>{
        if(currentPatient && !error){
            
            history.push("/patients/"+currentPatient.pnr)
        }        
    },[currentPatient, history, dispatch, error])

    const handleFormSubmit = (event) => {
        event.preventDefault();        
        dispatch(findPatientByPnr(pnr));                
    }

  return (
    <Fragment>
      <h6>Already registered?</h6>
      <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
          <label className="visually-hidden" htmlFor="pnr">yyyyddmmxxxx</label>
            <div className="input-group">
                <div className="input-group-text">PNR:</div>
                <input type="text" onChange={(e) => setPnr(prevState => prevState = e.target.value)} className={`form-control ${error ? 'is-invalid' : ''}`} value={pnr} id="pnr" placeholder="Please enter your personal number..."  />
                {!isLoading && <button type="submit" className="btn btn-lg btn-success">Send</button>}
                {isLoading && <ButtonSpinner/>}
            </div>
            {error && <small className="text-danger">{error.message ? error.message : 'Something went wrong'}</small>}
          </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
