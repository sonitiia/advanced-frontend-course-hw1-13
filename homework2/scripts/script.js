let N = Number(prompt("Input N:"));

if (Number.isInteger(N)) {
    console.log("N is integer:", N,
        "Let's continue!");
} else { 
    console.log("N is a non-integer number:", N);
    N = Math.round(N);
    console.log( "Let's do it an integer number:", N);
}

let M = Number(prompt("Input M:"));

if (Number.isInteger(M)) {
    console.log("M is integer:", M, "Let's continue!");
} else { 
    console.log("M is a non-integer number:", M);
    M = Math.round(M);
    console.log( "Let's do it an integer number:", M);
}


const passNumbers = confirm("Do you want to pass the even number?");
let sum = 0;
for (N; N <= M; N++) {
    if (passNumbers == true) {
        if (N % 2 === 0) {
            continue;
        }
        sum += N;
    } else { 
        sum += N;
    }
}

console.log("Sum is:", sum);