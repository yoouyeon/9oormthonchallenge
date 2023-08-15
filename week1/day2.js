const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let N;
let cnt = 0;
let T, M;
const data = [];

rl.on('line', (line) => {
	input = line;
	if (N === undefined) {
		N = Number(input);
		return;
	}
	if (T === undefined && M === undefined) {
		const arr = input.split(' ');
		T = Number(arr[0]);
		M = Number(arr[1]);
		return;
	}
	if (cnt === N) rl.close();
	data.push(Number(input));
	cnt++;
});

rl.on('close', () => {
	const start = new Date(2023, 8, 15, T, M);
	for (let idx = 0; idx < data.length; idx++) {
		const c = data[idx];
		start.setMinutes(start.getMinutes() + c);
	}
	console.log(start.getHours(), start.getMinutes());
	process.exit(); 
})