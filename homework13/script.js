/// TASK1

function* createIdGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;  
    }
}

const idGenerator = createIdGenerator();
console.log(
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
    idGenerator.next().value, 
);


/// TASK2

function* newFontGenerator(fontSize) {
    let currentFontSize = fontSize;

    while (true) {
        const val = yield currentFontSize;
        if (val === "up") {
            currentFontSize += 2;
        } else if (val === "down") {
            currentFontSize -= 2;
        }   
    }
}

const fontGenerator = newFontGenerator(14);

console.log(
    fontGenerator.next("up").value, 
    fontGenerator.next("up").value, 
    fontGenerator.next("up").value, 
    fontGenerator.next().value, 
    fontGenerator.next("down").value, 
    fontGenerator.next("down").value, 
    fontGenerator.next("down").value, 
    fontGenerator.next().value, 
);


// change fontSize using buttons
const up = document.querySelector(".up");
const down = document.querySelector(".down");

function updateFontStyle(fontSize) {
    up.style.fontSize = fontSize + "px";
    down.style.fontSize = fontSize + "px";
}

updateFontStyle(14);

up.addEventListener("click", () => {
    const { value } = fontGenerator.next("up");
    updateFontStyle(value);
})

down.addEventListener("click", () => {
    const { value } = fontGenerator.next("down");
    updateFontStyle(value);
})

