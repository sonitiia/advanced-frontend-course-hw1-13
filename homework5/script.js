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
