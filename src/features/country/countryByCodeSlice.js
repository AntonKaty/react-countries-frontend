import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch Country By Code Thunk Action
export const fetchAsyncCountryByCode = createAsyncThunk(
	"countries/fetchAsyncCountryByCode",
	async (code) => {
		const response = await axios.get(
			`https://restcountries.com/v2/alpha/${code}`
		);
		return response.data;
	}
);

//Initial State
const initialState = {
	country: [],
	isLoading: true,
};

//Country Slice
const countryByCodeSlice = createSlice({
	name: "countryByCode",
	initialState,
	reducers: {
		clearCountry: (state) => {
			state.country = [];
		},
	},
	extraReducers: {
		[fetchAsyncCountryByCode.fulfilled]: (state, { payload }) => {
			console.log("Country by code fetched successfully");
			return {
				...state,
				country: payload,
				isLoading: false,
			};
		},
	},
});

export const { addCountryByCode, clearCountry } = countryByCodeSlice.actions;
export default countryByCodeSlice.reducer;
