let cStr = /^c(\s+\d+){3}\s*$/gi;
let rStr = /^r(\s+\d+){4}\s*$/gi;
let pStr = /^p(\s*\d+\s*,\s*\d+\s*){2,}(\s*\d+\s*,\s*\d+\s*)\s*$/gi;
let lStr = /^l(\s+\d+){5}\s*$/gi;

export const validateLine = (data, idx) => {
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
		let validatedData = data.replace(/p\s*|\s+/g, ' ');
		let result = {
			type: 'p',
			values: validatedData
		};
		return result;
	} else if (data.match(lStr)) {
		let validatedData = data
			.split(' ')
			.map((item) => item.trim())
			.filter((item) => item);
		let result = {
			type: 'l',
			values: validatedData
		};
		return result;
	} else {
		let result = { type: 'invalid', index: idx + 1 };
		return result;
	}
};
