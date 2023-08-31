function getRandomChinese(length) {
    return new Promise((res, rej) => {
        if (length === 0) {
            return;
        }

        let i = 0
        let arr = [];

        const generateNextCharacter = () => {
            const sign = +Date.now().toString().slice(-5);
            let ier = String.fromCharCode(sign);
            arr.push(ier);
            i++;

            if (i < length) {
                setTimeout(generateNextCharacter, 50*length)
            } else {
                const str = arr.join("");
                res(str);
            }
        };

        generateNextCharacter();
    })
}

getRandomChinese(4).then((result) => {
    console.log(result);
});
