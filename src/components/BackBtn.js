import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ darkMode }) => {
	const navigate = useNavigate();

	const backToHome = () => {
		navigate("/");
	};

	return (
		<div className="p-10">
			<button
				onClick={backToHome}
				className={`flex items-center bg-white text-slate-400 font-medium py-2 px-6 border border-slate-400 rounded shadow-xl back ${
					darkMode ? "darkMode" : ""
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
					/>
				</svg>
				<span className="mx-3">Back</span>
			</button>
		</div>
	);
};

export default BackBtn;
