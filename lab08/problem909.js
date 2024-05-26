process.stdin.on('data', function (data) {
    const input = data.toString().trim();
    const words = input.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    console.log(wordCount);
});