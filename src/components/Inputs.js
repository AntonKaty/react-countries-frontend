import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
	fetchAsynCountryByName,
	fetchAsyncByRegion,
	fetchAsyncCountries,
} from "../features/countries/countrySlice";

const Inputs = ({ onClick, darkMode }) => {
	const dispatch = useDispatch();
	const countriesInputRef = useRef();
	const regionInputRef = useRef();

	const searchCountries = () => {
		const searchValue = countriesInputRef.current.value;
		if (searchValue.trim()) {
			dispatch(fetchAsynCountryByName(searchValue));
		}
	};

	const selectRegion = () => {
		const searchValue = regionInputRef.current.value;

		searchValue === "All"
			? dispatch(fetchAsyncCountries())
			: dispatch(fetchAsyncByRegion(searchValue));
	};

	return (
		<div className="flex flex-col items-center gap-5 md:flex-row justify-between">
			<div className={`relative search_input ${darkMode ? "darkMode" : ""}`}>
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 text-gray-400"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
				<input
					type="text"
					placeholder="Search for a country..."
					className="w-80 md:w-80 shadow-md border border-gray-300 text-gray-500 block pl-10 p-2.5 text-sm rounded-lg"
					ref={countriesInputRef}
					onChange={searchCountries}
				/>
			</div>
			<div>
				<select
					className="w-80 md:w-80 shadow-md border border-gray-300 text-gray-500 block text-sm rounded-lg bg-white p-3"
					ref={regionInputRef}
					onChange={selectRegion}
				>
					<option>Filter by Region</option>
					<option>All</option>
					<option>Africa</option>
					<option>Americas</option>
					<option>Asia</option>
					<option>Europe</option>
					<option>Oceania</option>
				</select>
			</div>
		</div>
	);
};

export default Inputs;
