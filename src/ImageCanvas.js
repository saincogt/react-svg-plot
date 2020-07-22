import React from 'react';
import { validateLine } from './validateLine';
import RenderShape from './renderShape';

const ImageCanvas = ({ data }) => {
	const foramtInput = (inputData) => {
		let arr = inputData.split('\n');
		let validatedLineArr = arr.map((item, idx) => {
			item.trim();
			return validateLine(item, idx);
		});
		return validatedLineArr;
	};
	const generateColor = () => {
		return '#' + Math.random().toString(16).substr(-6);
	};
	return (
		<div>
			<svg width='250px' height='250px' className='svg-canvas'>
				{data &&
					foramtInput(data).map((item, idx) => (
						<RenderShape
							key={idx}
							item={item}
							color={generateColor()}
						/>
					))}
			</svg>
		</div>
	);
};

export default React.memo(ImageCanvas);
