import { createSlice} from "@reduxjs/toolkit";

const currentPatientSlice = createSlice({
  name: "currentPatient",
  initialState: {
    currentPatient: null,
    isLoading: false,
    error: null
  },
  reducers: {
    setCurrentPatient(state, action) {
      //1 - Immutable then we need to return state object
      //OR
      //2 - Mutate we can't return state
      //3 - We can't do both 
      if (!state.currentPatient) {
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
      }

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
    setError(state, action){
        state.error = action.payload;
    },
    setIsLoading(state, action){
        state.isLoading = action.payload;
    }
  },
});

export const { setCurrentPatient, removeCurrentPatient, setIsLoading, setError } =
  currentPatientSlice.actions;

export default currentPatientSlice.reducer;
