process.stdin.on('data', function (data) {
    const input = data.toString().trim().replace('-', '').split('').map(Number);
    input.forEach(digit => {
        console.log(digit);
    });
});