process.stdin.on('data', function (data) {
    const input = data.toString().trim().replace(/[ ,]/g, '');
    if (input === input.split('').reverse().join('')) {
        console.log("YES");
    } else {
        console.log("NO");
    }
});