const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line.trim());
}).on('close', () => {
    const [numKiosks, requiredKiosks] = inputLines[0].split(' ').map(Number);
    const kioskPositions = inputLines[1].split(' ').map(Number);

    let minDistance = 0;
    let maxDistance = kioskPositions[numKiosks - 1] - kioskPositions[0];
    let optimalDistance = 0;

    while (minDistance <= maxDistance) {
        const midDistance = Math.floor((minDistance + maxDistance) / 2);
        let count = 1;
        let lastPosition = kioskPositions[0];

        for (let i = 1; i < numKiosks; i++) {
            if (kioskPositions[i] - lastPosition >= midDistance) {
                count++;
                lastPosition = kioskPositions[i];
            }
            if (count >= requiredKiosks) break;
        }

        if (count >= requiredKiosks) {
            optimalDistance = midDistance;
            minDistance = midDistance + 1;
        } else {
            maxDistance = midDistance - 1;
        }
    }

    console.log(optimalDistance);
});
