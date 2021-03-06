import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setIsLoading,
  setError,
  setCurrentPatient,
} from "./currentPatientSlice";

import {
  findPatientByPersonalNumber,
  postNewPatient,
} from "../api/immunityAPI";

export const findPatientByPnr = createAsyncThunk(
  "currentPatient/findPatientByPnr",
  async (pnr, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await findPatientByPersonalNumber(pnr);
      if (response.status && response.status === 404) {
        thunkAPI.dispatch(setError(response));
      }

      thunkAPI.dispatch(setCurrentPatient(response));
    } catch (error) {
      console.log("There was an error");
    } finally {
      thunkAPI.dispatch(setIsLoading(false));
    }
  }
);

export const addNewPatient = createAsyncThunk(
  "currentPatient/addNewPatient",  
  async ({patient}, thunkAPI) => {
  
  try {
    thunkAPI.dispatch(setIsLoading(true));
    const response = await postNewPatient(patient);
    console.log(response)
    if (response.status && response.status === 400) {
      thunkAPI.dispatch(setError(response));
    }

    thunkAPI.dispatch(setCurrentPatient(response));
  } catch (error) {
    console.log("There was an error");
  } finally {
    thunkAPI.dispatch(setIsLoading(false));
  }
});
