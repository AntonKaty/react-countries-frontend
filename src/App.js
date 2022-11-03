import React, { useState } from "react";
import "./App.css";
//Components
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
//React Router
import { Routes, Route } from "react-router-dom";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const switchMode = () => {
		setDarkMode((prevState) => !prevState);
	};

	return (
		<div className={`app ${darkMode ? "darkMode" : ""}`}>
			<Header onClick={switchMode} darkMode={darkMode} />
			<Routes>
				<Route
					path="/"
					element={<CountryList onClick={switchMode} darkMode={darkMode} />}
				/>
				<Route
					path="/:alpha3Code"
					element={<CountryDetails onClick={switchMode} darkMode={darkMode} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
