getMaxDigit = (number) => {
    if (number == 0) {
        return 0;
    } else {
        return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
    }
}

/////
loopedMultiply = (base, exp) => {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

powerOfNumber = (base, exp) => {
    let result = 1;
    if (exp >= 0) {
        result = loopedMultiply(base, exp);
    } else {
        result = 1/loopedMultiply(base, -exp);
    }
    return result;
}
/////

toUpperCaseFirstLetter = (word) => {
    word = word.toLowerCase();
    const finalWord = word.charAt(0).toUpperCase() + word.slice(1);
    return finalWord;
}

salaryWithTax = (salary) => { 
    const tax = 18 + 1.5;
    result = salary * (100 - tax) / 100;
    return result;
}

getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

countLetter = (letter, word) => { 
    let sum = 0;
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) { 
        if (letter == word[i]) {
            sum++;
        }
    }
    return sum;
}

convertCurrency = (money) => { 
    moneyToConvert = 0;
    if (money.endsWith("UAH")) {
        moneyToConvert = money.split(/UAH/);
        moneyToConvert[0] /= 25;
        moneySymbol = "$";
    } else if (money.endsWith("uah")) { 
        moneyToConvert = money.split(/uah/);
        moneyToConvert[0] /= 25;
        moneySymbol = "$";
    } else if (money.endsWith("$")) {
        moneyToConvert = money.split(/[^\d]/g); // extract all non- digit
        moneyToConvert[0] *= 25;
        moneySymbol = "UAH";
    } else { 
        console.log("Input UAH or dollar sign at the very end!");
    }
    return moneyToConvert[0] + moneySymbol;
}

getRandomPassword = (number) => {
    let password = number || 8;
    let randomPassword = '';
    for (let i = 0; i < password; i++) {
        randomPassword += getRandomNumber(0, 9);
    }
    return randomPassword;
}

deleteLetters = (letter, word) => {
    letter = letter.toLowerCase();
    let wordWithoutLetter = "";
    wordWithoutLetter = word.toLowerCase().replaceAll(`${letter}`, "");
    return wordWithoutLetter;
}

isPalindrome = (string) => {
    string = string.replace(/\s+/g, '').toLowerCase();
    //  \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s(whitespaces)
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

deleteDuplicateLetter = (string) => {
    string = string.toLowerCase();
    let arrayFromString = string.split("");
    let result = [];
    for (let i = 0; i < arrayFromString.length; i++) {
        if (string.indexOf(arrayFromString[i]) === string.lastIndexOf(arrayFromString[i])) {
            result.push(arrayFromString[i]);
        }
    }
    return result.join("");
}
    
console.log(
    `Function No1: ${getMaxDigit(241068783)}`,
    `\nFunction No2: ${powerOfNumber(-2.2, -3)}`,
    `\nFunction No3: ${toUpperCaseFirstLetter('вЛАД')}`,
    `\nFunction No4: ${salaryWithTax(10000)}`,
    `\nFunction No5: ${getRandomNumber(1, 10)}`,
    `\nFunction No6: ${countLetter("u", "FUture")}`,
    `\nFunction No7/8: ${convertCurrency("2500uah")}`,
    `\nFunction No9/10: ${getRandomPassword(5)}`,
    `\nFunction No11: ${deleteLetters("A", "blaAblabla")}`,
    `\nFunction No12: ${isPalindrome("Я несу гусеня")}`,
    `\nFunction No13: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`,
);

