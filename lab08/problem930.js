process.stdin.on('data', function (data) {
    const inputString = data.toString().trim().replace('+', ' ').trim();
    const numbers = inputString.split('').filter(char => !isNaN(char) && char !== ' ').map(Number);
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let missingDigits = new Set();
    digits.forEach(digit => {
        if (!numbers.includes(digit)) {
            missingDigits.add(digit);
        }
    });
    console.log(missingDigits.size);
    console.log(Array.from(missingDigits).join(' '));
});