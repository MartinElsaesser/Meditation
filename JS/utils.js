function calcPercents(times) {
	const totalTime = times.reduce((a, b) => a + b);
	const percents = [];
	const percentsFromStart = [];
	times.forEach(time => {
		let prevPercents = 0;
		if (percents.length > 0) {
			prevPercents = percents.reduce((a, b) => a + b);
		}
		let percent = time * 100 / totalTime;
		percent = Math.round(percent * 100) / 100;
		percentsFromStart.push(Math.round(percent * 100 + prevPercents * 100) / 100);
		percents.push(percent);
	});
	return percentsFromStart;
}

// calcPercents([0.1, 3, 0.2, 2, 0.2, 3, 0.1]);
console.log(calcPercents([3, 2, 3]));