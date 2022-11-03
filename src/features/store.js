import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countries/countrySlice";
import countryByCodeSlice from "./country/countryByCodeSlice";

const store = configureStore({
	reducer: {
		countries: countrySlice,
		countryByCode: countryByCodeSlice,
	},
});

export default store;
