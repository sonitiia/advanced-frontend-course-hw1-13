document.addEventListener("DOMContentLoaded", function() {
    function $(name) {
        return document.querySelector(name);
    }

    $("#generate-blocks").addEventListener("click", function generateBlocks() {
        const elements = document.getElementsByClassName("square");
        for (let i = 0; i < elements.length; i++) {
            const randomIndex = getRandomNumber(0, colors.length);
            const randomColor = colors[randomIndex];
            elements[i].style.backgroundColor = randomColor;
        }
    })

    $("#generate-blocks-interval").addEventListener("click", function generateBlocksInterval() {
        const elements = document.getElementsByClassName("square");
        for (let i = 0; i < elements.length; i++) {
            setInterval(() => {
                const randomIndex = getRandomNumber(0, colors.length);
                const randomColor = colors[randomIndex];
                elements[i].style.backgroundColor = randomColor;
            }, 1000);
            clearInterval();
        }
    })
});

const colors = [
    "red", "green", "blue", "yellow", "orange", 
    "purple", "pink", "teal", "maroon", "navy", 
    "lime", "aqua", "silver", "gold", "indigo", 
    "violet", "magenta", "cyan", "olive", "brown", 
    "lightgrey", "grey", "orchid", "salmon", "turquoise"
];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}