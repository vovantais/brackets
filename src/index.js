module.exports = function check(str, bracketsConfig) {
	let newStr = str.split('');
	let newArr = [];
	let arr = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		newArr[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}

	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === arr[arr.length - 1]) {
			arr.pop();
		} else {
			if (newArr[newStr[i]] !== undefined) arr.push(newArr[newStr[i]]); else return false;
		}
	}

	return arr.length == 0;
}
