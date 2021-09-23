
import axios from "axios";

export const findPatientByPersonalNumber = async (pnr) =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/patients?pnr=${pnr}`);
        return response.data;
    }catch(err){
        return err.response.data;
    }
}

export const postNewPatient = async (patient) => {
    try{
        const response = await axios.post(`http://localhost:8080/api/v1/patients`, {
            patient    
        });
        return response.data;
    }catch(err){
        return err.response.data;
    }
}