let cStr = /^c(\s+\d+){3}\s*$/gi;
let rStr = /^r(\s+\d+){4}\s*$/gi;
let pStr = /^p(\s*\[\s*\d+\s*,\s*\d+\s*\]\s*){2,}(\s*\[\s*\d+\s*,\s*\d+\s*\])\s*$/gi;

export const validateLine = (data, idx) => {
	data.trim();
	if (data.match(cStr)) {
		let validatedData = data
			.split(' ')
			.map((item) => item.trim())
			.filter((item) => item);
		let result = {
			type: 'c',
			values: validatedData
		};
		return result;
	} else if (data.match(rStr)) {
		let validatedData = data
			.split(' ')
			.map((item) => item.trim())
			.filter((item) => item);
		let result = {
			type: 'r',
			values: validatedData
		};
		return result;
	} else if (data.match(pStr)) {
		let validatedData = data.replace(/p|\[|]/g, '');
		let result = {
			type: 'p',
			values: validatedData
		};
		return result;
	} else {
		let result = { type: 'invalid', index: idx + 1 };
		return result;
	}
};
