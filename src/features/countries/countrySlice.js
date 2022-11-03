import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//URL
const baseURL = "https://restcountries.com/v2/all";

//Fetch All Countries Thunk Action
export const fetchAsyncCountries = createAsyncThunk(
	"countries/fetchAsyncCountries",
	async () => {
		const response = await axios(baseURL);
		return response.data;
	}
);

//Fetch Country By Name Thunk Action
export const fetchAsynCountryByName = createAsyncThunk(
	"countries/fetchAsynCountryByName",
	async (searchValue) => {
		const response = await axios.get(
			`https://restcountries.com/v2/name/${searchValue}`
		);
		return response.data;
	}
);

//Fetch Region Thunk Action
export const fetchAsyncByRegion = createAsyncThunk(
	"countries/fetchAsyncByRegion",
	async (searchValue) => {
		const response = await axios.get(
			`https://restcountries.com/v2/region/${searchValue}`
		);
		return response.data;
	}
);

//Initial State
const initialState = {
	countries: [],
	isLoading: true,
};

//Country Slice
const countrySlice = createSlice({
	name: "countries",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncCountries.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched countries");
			return {
				...state,
				countries: payload,
				isLoading: false,
			};
		},
		[fetchAsynCountryByName.fulfilled]: (state, { payload }) => {
			console.log("Country by name fetched successfully");
			return {
				...state,
				countries: payload,
			};
		},
		[fetchAsyncByRegion.fulfilled]: (state, { payload }) => {
			console.log("Region fetched successfully");
			return {
				...state,
				countries: payload,
			};
		},
	},
});

export const { addCountries } = countrySlice.actions;
export default countrySlice.reducer;
