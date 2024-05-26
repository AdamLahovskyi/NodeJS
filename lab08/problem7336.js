process.stdin.on('data', function (data) {
    const input = data.toString().trim().split(' ').map(Number);
    const a = input[0];
    const b = input[1];
    const n = input[2];

    let totalKopecks = (a * 100 + b) * n;

    let totalHryvnias = Math.floor(totalKopecks / 100);
    totalKopecks = totalKopecks % 100;

    console.log(`${totalHryvnias} ${totalKopecks}`);
});
