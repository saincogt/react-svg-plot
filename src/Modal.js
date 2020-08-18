import React from 'react';

const Modal = ({ setOpen }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('backdrop')) setOpen(false);
	};
	return (
		<div className='backdrop' onClick={handleClick}>
			<div className='modal-content'>
				<div className='modal-header'>
					<h2>Instructions</h2>
				</div>
				<div className='modal-body'>
					<p>{`R <X Coordinate> <Y Coordinate> <Width> <Height> - Should Draw a rectangle with the parameters marked onto the SVG.`}</p>
					<p>{`C <CX Coordinate> <CY Coordinate> <Radius> - Should Draw a circle with the parameters marked onto the SVG.`}</p>
					<p>{`P <X1,Y1> <X2,Y2> <X3,Y3> ..... <Xn,Yn> - Should draw a polygon onto the SVG with the points specified.`}</p>
					<p>{`L <X1> <Y1> <X2> <Y2> <Stroke Width> - Should draw a line onto the SVG with points and stroke width specified.`}</p>
					<br />
					<p>
						For example, following command will draw a polygon, a
						circle, a rectangle and a line:
					</p>
					<div className='command-example'>
						<p>
							p 200,10 250,190 160,210
							<br />
							c 20 100 20
							<br />
							r 100 50 25 25
							<br />l 40 10 60 200 5
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
