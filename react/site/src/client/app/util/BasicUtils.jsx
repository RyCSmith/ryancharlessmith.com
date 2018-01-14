export const randomHexKey = (prefix) => {
	let rand = Math.random().toString(16).substring(2, 7);
	return prefix === undefined ? rand : prefix + '_' + rand;
}