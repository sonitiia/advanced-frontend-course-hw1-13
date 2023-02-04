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
        if (el % 1 != 0) continue;
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


getAverage = (...numbers) => { 
    let result = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el % 1 != 0) continue;
        sum += el;
        result = sum / numbers.length;
    }
    return result;
}

const average = getAverage(2, 2, 2, 0 ,-2);
console.log(average);


getMedian = (...numbers) => {
    const arr = [];
    let result;
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el % 1 != 0) continue;
        arr.push(el);
        const halfLength = arr.length / 2;
        if (arr.length % 2 != 0) {
            result = arr[Math.floor(halfLength)];
        } else { 
            result = getAverage(arr[halfLength-1], arr[halfLength]);
        }
    }
    return result;
}

const median = getMedian(1, 2, 3, 4, 1.5);
// const median = getMedian(1, 2, 3, 4, 5);
console.log(median);


filterEvenNumbers = (...numbers) => { 
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el % 1 != 0) continue;
        if (el % 2 == 0) continue;
        result.push(el);
    }
    return result;
}

const oddNumbers = filterEvenNumbers(1, 2, 3, 4, 1.5, 5, 6);
// const median = getMedian(1, 2, 3, 4, 5);
console.log(oddNumbers);


countPositiveNumbers = (...numbers) => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el > 0) {
            count++;
        }
    }
    return count;
}

const amountOfPositiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6, 0, 6);
console.log(amountOfPositiveNumbers);


getDividedByFive = (...numbers) => {
    const arr = []
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el % 5 == 0) {
            arr.push(el);
        }
    }
    return arr;
}

const dividedByFiveNumbers = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0);
console.log(dividedByFiveNumbers);


replaceBadWords = (string) => {
    // string = string.toLowerCase();
    const badWords = ["shit", "fuck", "anything"];
    const arrayFromString = string.split(" ");
    let findBadWord = "";
    let arr = [];
    let result = "";
    for (let i = 0; i < arrayFromString.length; i++) {
        let el = arrayFromString[i];
        for (let i = 0; i < badWords.length; i++) {
            const badWord = badWords[i];
            findBadWord = el.includes(badWord);
            if (findBadWord == true) { 
                el = el.replace(badWord, "*".repeat(badWord.length));
            }
        } 
        arr.push(el);
        result = arr.join(" ");
    }
    return result;
}

const replaceBadWordsWithAsterisks = replaceBadWords("Are you fucking kidding fucking shit Anything?");
console.log(replaceBadWordsWithAsterisks);


divideByThree = (word) => {
    word = word.toLowerCase().replace(/\s+/g, '');
    let res = word.split("");
    const result = new Array(Math.ceil(res.length / 3))
        .fill([])
        .map(() => res.splice(0, 3).join(""))
    return result;
}

const divideWordByThree = divideByThree("Comm  anderrr");
console.log(divideWordByThree);