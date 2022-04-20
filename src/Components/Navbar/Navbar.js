import React from 'react';
import Select from 'react-select';
import './Navbar.css';

const Navbar = ({userLang, setUserLang, userTheme,
				setUserTheme, fontSize, setFontSize}) => {
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]
	return (
		<div className="navbar">
			<h1>Code Compiler</h1>
			<Select options={languages} value={languages[userLang]}
					onChange={(e) => setUserLang(e.value)}
					placeholder={languages[userLang]} />
			<Select options={themes} value={themes[userTheme]}
					onChange={(e) => setUserTheme(e.value)}
					placeholder={themes[userTheme]} />
			<label>Font Size</label>
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value)}}/>
		</div>
	)
}

export default Navbar
