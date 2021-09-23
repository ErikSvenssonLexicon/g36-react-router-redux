
import axios from "axios";

export const findPatientByPersonalNumber = async (pnr) =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/patients?pnr=${pnr}`);
        return response.data;
    }catch(err){
        return err.response.data;
    }    
}

export const postNewPatient = async ({pnr, firstName, lastName, birthDate, gender, contactInfo}) => {
    try{
        const response = await axios.post(`http://localhost:8080/api/v1/patients`, {
            pnr: pnr,
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            gender: gender,
            contactInfo: contactInfo            
        });
        return response.data;
    }catch(err){
        return err.response.data;
    }
}