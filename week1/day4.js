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

const isEqual = (arrA, arrB) => {
	if (arrA.length !== arrB.length) return false;
	return arrA.every((a, i) => a === arrB[i]);
}

rl.on('close', () => {
	let sum = 0;
	const N = Number(input[0]);
	const hamburger = input[1].split(' ').map((k) => Number(k));
	const maxK = hamburger.indexOf(Math.max(...hamburger));
	const left = hamburger.slice(0, maxK);
	const right = hamburger.slice(maxK);
	// 왼쪽 배열이 오름차순 정렬되어 있는지 확인
	const leftIsSorted = isEqual(left, [...left].sort((a, b) => a - b));
	// 오른쪽 배열이 내림차순 정렬되어 있는지 확인
	const rightIsSorted = isEqual(right, [...right].sort((a, b) => b - a));
	// 정렬되어 있다면 sum을 왼쪽 배열과 오른쪽 배열의 합으로 업데이트한다.
	if (leftIsSorted && rightIsSorted)
		sum = hamburger.reduce((acc, curr) => acc + curr, 0);
	console.log(sum);
})