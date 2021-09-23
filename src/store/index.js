import {configureStore} from '@reduxjs/toolkit';
import currentPatientSlice from './currentPatientSlice';

const store = configureStore({
    reducer: {
        currentPatient: currentPatientSlice 
    }
})

export default store;