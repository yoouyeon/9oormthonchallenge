const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	if (input.length === 2) rl.close();
});

rl.on('close', () => {
	const [N, K] = input[0].split(' ').map((num) => Number(num));
	const arr = input[1].split(' ').map((num) => {
		const number = Number(num);
		const bitCnt = number.toString(2).split('').filter((ele) => ele === '1').length;
		return [bitCnt, number];
	});
	arr.sort((a, b) => {
		if (a[0] === b[0]) return b[1] - a[1];
		return b[0] - a[0];
	})
	console.log(arr[K - 1][1]);
})