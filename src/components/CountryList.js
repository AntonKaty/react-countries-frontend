import React from "react";
import Inputs from "./Inputs";
import Country from "./Country";

const CountryList = ({ onClick, darkMode }) => {
	return (
		<div
			className={`bg-slate-50 h-screen pt-8 app ${darkMode ? "darkMode" : ""} `}
		>
			<div className="max-width">
				<Inputs onClick={onClick} darkMode={darkMode} />
			</div>
			<div
				className={`mt-5 bg-slate-50  grid grid-cols-1 gap-10 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 app ${
					darkMode ? "darkMode" : ""
				}`}
			>
				<Country onClick={onClick} darkMode={darkMode} />
			</div>
		</div>
	);
};

export default CountryList;
