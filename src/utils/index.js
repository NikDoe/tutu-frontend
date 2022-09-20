export const stringTime = str => {
	const newStr = str.slice(0, -3).split(':');
	const h = newStr[0] <= 9 ? newStr[0].slice(1) : newStr[0];
	const m = newStr[1];
	return `${h} часов ${m} минут`;
};
