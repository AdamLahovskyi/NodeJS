process.stdin.on('data', function (data) {
    const input = data.toString().split(' ').map(x => parseInt(x));
    const n = input[0];
    const i = input[1] - 1;
    const j = input[2] - 1;

    let matrix = Array.from(Array(n), () => new Array(n).fill(0));
    let value = 1;
    let x = 0, y = 0;
    let dx = 0, dy = 1;

    while (value <= n * n) {
        matrix[x][y] = value;
        value++;
        if (dy === 1 && (y + dy === n || matrix[x][y + dy] !== 0)) {
            dx = 1; dy = 0;
        } else if (dx === 1 && (x + dx === n || matrix[x + dx][y] !== 0)) {
            dx = 0; dy = -1;
        } else if (dy === -1 && (y + dy === -1 || matrix[x][y + dy] !== 0)) {
            dx = -1; dy = 0;
        } else if (dx === -1 && (x + dx === -1 || matrix[x + dx][y] !== 0)) {
            dx = 0; dy = 1;
        }
        x += dx;
        y += dy;
    }
    console.log(matrix[i][j]);
});
