import React, { useEffect } from "react";
import BackBtn from "./BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import {
	fetchAsyncCountryByCode,
	clearCountry,
} from "../features/country/countryByCodeSlice";

const CountryDetails = ({ darkMode }) => {
	const { alpha3Code } = useParams();
	const data = useSelector((state) => state.countryByCode.country);
	const { isLoading } = useSelector((state) => state.countryByCode);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncCountryByCode(alpha3Code));
		return () => {
			dispatch(clearCountry());
		};
	}, [dispatch, alpha3Code]);

	const {
		name,
		flag,
		nativeName,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borders,
	} = data;

	let currenciesCountry = "";
	let languagesCountry = [];
	let bordersCountry = [];

	if (currencies) {
		currenciesCountry = currencies.map((currencie) => currencie.name);
	}

	if (languages) {
		languagesCountry = languages.map((language) => language.name);
	}

	if (borders) {
		bordersCountry = borders.map((border) => border);
	}

	return (
		<div className={`bg-slate-50 h-screen app ${darkMode ? "darkMode" : ""}`}>
			<BackBtn darkMode={darkMode} />
			{isLoading ? (
				<Spinner />
			) : (
				<div
					className={`flex flex-col gap-14 px-10 pt-2 bg-slate-50 lg:flex-row justify-center items-center lg:gap-32 app ${
						darkMode ? "darkMode" : ""
					}`}
				>
					<img src={flag} alt="Flag" className="h-56  md:h-80 lg:h-80 " />
					<div className="info">
						<h1 className="font-bold text-3xl">{name}</h1>
						<div className="md:flex gap-10 items-baseline">
							<ul className="my-6">
								<li>
									<span className="font-medium">Native Name: </span>{" "}
									<span className="font-extralight values">{nativeName}</span>
								</li>
								<li className="my-3">
									<span className="font-medium">Population: </span>{" "}
									<span className="font-extralight">{data.population}</span>
								</li>
								<li className="my-3">
									<span className="font-medium">Region: </span>
									<span className="font-extralight">{region}</span>
								</li>
								<li className="my-3">
									<span className="font-medium">Sub Region: </span>
									<span className="font-extralight">{subregion}</span>
								</li>
								<li>
									<span className="font-medium">Capital: </span>
									<span className="font-extralight">{capital}</span>
								</li>
							</ul>
							<ul className="mt-12">
								<li>
									<span className="font-medium">Top Level Domain: </span>{" "}
									<span className="font-extralight">{topLevelDomain}</span>
								</li>
								<li className="my-3">
									<span className="font-medium">Currencies: </span>{" "}
									<span className="font-extralight">{currenciesCountry}</span>
								</li>
								<li className="my-3">
									<span className="font-medium">Languages: </span>
									{languagesCountry.map((item) => (
										<span key={item}>
											<span className="font-extralight">{item}</span>
											{", "}
										</span>
									))}
								</li>
							</ul>
						</div>
						<div className="my-14">
							<span className="font-medium">Border Countries: </span>
							<ul className="pt-3 flex items-center flex-wrap gap-2">
								{bordersCountry.map((border) => (
									<li key={border} className="mt-3">
										<span
											className={`bg-white px-9 py-2 border rounded shadow text-xs border_country ${
												darkMode ? "darkMode" : ""
											}`}
										>
											<span className="font-extralight">{border}</span>
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryDetails;
