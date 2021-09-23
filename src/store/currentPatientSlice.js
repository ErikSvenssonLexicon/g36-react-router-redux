import { createSlice } from "@reduxjs/toolkit";


const currentPatientSlice = createSlice({
  name: "currentPatient",
  initialState: {
    currentPatient: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentPatient(state, action) {
      //1 - Immutable then we need to return state object
      //OR
      //2 - Mutate we can't return state
      //3 - We can't do both

      state.currentPatient = {
        id: action.payload.id,
        pnr: action.payload.pnr,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        gender: action.payload.gender,
        contactInfo: {
          id: action.payload.contactInfo.id,
          email: action.payload.contactInfo.email,
          phone: action.payload.contactInfo.phone,
        },
        bookings: action.payload.bookings,
      };

      /*
            Immutable add
            return {
                ...state,
                currentPatient: action.payload
            }
            */
    },
    removeCurrentPatient(state, action) {
      //Immutable example
      return {
        ...state,
        currentPatient: null,
      };
    },
    setError(state, action) {
      const errorBody = action.payload;
      if(action.payload=== null){
        state.error = null;
      }else if (!errorBody.violations) {
        state.error = action.payload;
      } else {
        state.error = {
          timeStamp: errorBody.timeStamp,
          status: errorBody.status,
          error: errorBody.error,
          message: errorBody.message,
          path: errorBody.path,
          firstNameErrors: errorBody.violations
            .filter((violation) => violation.field === "firstName")
            .map((violation) => violation.message),
          lastNameErrors: errorBody.violations
            .filter((violation) => violation.field === "lastName")
            .map((violation) => violation.message),
          pnrErrors: errorBody.violations
            .filter((violation) => violation.field === "pnr")
            .map((violation) => violation.message),
          genderErrors: errorBody.violations
            .filter((violation) => violation.field === "gender")
            .map((violation) => violation.message),
          birthDateErrors: errorBody.violations
            .filter((violation) => violation.field === "birthDate")
            .map((violation) => violation.message),
          emailErrors: errorBody.violations
            .filter((violation) => violation.field === "contactInfo.email")
            .map((violation) => violation.message),
          phoneErrors: errorBody.violations
            .filter((violation) => violation.field === "contactInfo.phone")
            .map((violation) => violation.message),
        };
      }
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCurrentPatient,
  removeCurrentPatient,
  setIsLoading,
  setError,
} = currentPatientSlice.actions;

export default currentPatientSlice.reducer;
