const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	if (input.length === Number(input[0]) + 1) rl.close();
});

const operation = (A, operator, B) => {
	switch (operator) {
		case '+':
			return Number(A) + Number(B);
		case '-':
			return Number(A) - Number(B);
		case '*':
			return Number(A) * Number(B);
		case '/':
			return Math.trunc(Number(A) / Number(B));
		default:
			process.exit(1);
	}
}

rl.on('close', () => {
	const T = Number(input[0]);
	let ret = 0;
	for (let i = 0; i < T; i++) {
		const [A, operator, B] = input[i + 1].split(' ');
		ret += operation(A, operator, B);
	}
	console.log(ret);
})