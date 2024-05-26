process.stdin.on('data', function (data) {
    let n = parseInt(data, 10);
    let matrix = [];
    for(let i = 0; i < n; i++){
        matrix[i] = [];
        for(let j = 0; j < n; j++){
            if(i+j < n-1){
                matrix[i][j] = 2;
            }
            else if(i+j === n-1){
                matrix[i][j] = 0;
            }
            else{
                matrix[i][j] = 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(''));
    }
});