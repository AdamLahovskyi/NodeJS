process.stdin.on('data', function (data) {
    let [a, b, c, d] = data.toString().trim().split(' ').map(Number);
    let res = new Set();
    let temp;
    if(a>b){
        temp = a;
        a = b;
        b = temp;
    }
    if(c>d){1
        temp = c;
        c = d;
        d = temp;
    }
    for(let i = a; i<=b ; i++){
        for(let j = c; j<=d; j++){
            temp = i*j;
            if(!res.has(temp));
            {res.add(temp)};
        }
    }
    console.log(res.size);
});