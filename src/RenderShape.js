import React from 'react';
const RenderShape = ({ item, color }) => {
	if (item.type === 'c') {
		return (
			<circle
				cx={item.values[1]}
				cy={item.values[2]}
				r={item.values[3]}
				fill={color}
			/>
		);
	}
	if (item.type === 'r') {
		return (
			<rect
				x={item.values[1]}
				y={item.values[2]}
				width={item.values[3]}
				height={item.values[4]}
				style={{ fill: `${color}` }}
			/>
		);
	}
	if (item.type === 'p') {
		return <polygon points={item.values} fill={color}></polygon>;
	}
	if (item.type === 'l') {
		return (
			<line
				x1={item.values[1]}
				y1={item.values[2]}
				x2={item.values[3]}
				y2={item.values[4]}
				stroke={color}
				strokeWidth={item.values[5]}
			/>
		);
	}
	if (item.type === 'invalid') {
		alert(`Input is not valid at Line: ${item.index}`);
		return null;
	}
};

export default RenderShape;
