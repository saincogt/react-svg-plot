import React, { useState } from 'react';
import ImageCanvas from './ImageCanvas';
import './App.css';

const App = () => {
	const [inputVal, setInputVal] = useState('');
	const [imageData, setImageData] = useState('');
	const handleSubmitClick = () => {
		setImageData(inputVal);
	};
	const handleChange = (e) => {
		setInputVal(e.target.value);
	};
	return (
		<div className='container'>
			<ImageCanvas data={imageData} />
			<textarea
				cols='20'
				rows='5'
				value={inputVal}
				onChange={(e) => handleChange(e)}
			></textarea>
			<button onClick={handleSubmitClick}>Draw Image</button>
		</div>
	);
};

export default App;
