const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = line;
	rl.close();
});

rl.on('close', () => {
	const [W, R] = input.split(' ').map((element) => Number(element));
	const IRM = Math.floor(W * (1 + R / 30));
	console.log(IRM);
})