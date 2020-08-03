import React, { useState } from 'react';
import ImageCanvas from './ImageCanvas';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

const App = () => {
	const [inputVal, setInputVal] = useState('');
	const [imageData, setImageData] = useState('');
	const [open, setOpen] = useState(false);
	const handleSubmitClick = () => {
		setImageData(inputVal);
	};
	const handleChange = (e) => {
		setInputVal(e.target.value);
	};
	return (
		<>
			<Header setOpen={setOpen} />
			<div className='container'>
				{open && <Modal setOpen={setOpen} />}
				<ImageCanvas data={imageData} />
				<textarea
					cols='20'
					rows='5'
					value={inputVal}
					onChange={(e) => handleChange(e)}
				></textarea>
				<button onClick={handleSubmitClick} className='custom-btn'>
					Draw Image
				</button>
				<Footer />
			</div>
		</>
	);
};

export default App;
