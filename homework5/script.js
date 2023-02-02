getRandomArray = (length, min, max) => { 
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        randomArray.push(randomNumber);
    }
    return randomArray;    
}

const randomArray = getRandomArray(8, 1, 100);
console.log(randomArray);


getModa = (...numbers) => {
    const moda = {};
    let max = 0 || null;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];

        if (el % 1 != 0) {
            continue;
        }

        if (moda[el]) { // el = key, moda[el] = value
            moda[el]++;
        } else {
            moda[el] = 1;
        }

        if (count < moda[el]) {
            max = el;
            count = moda[el];
        }
    }

    return max;
}

// const moda = getModa(6.4, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
// const moda = getModa(6.4, 6.4);
const moda = getModa(6.4, 6.4, 3, 0);
console.log(moda);