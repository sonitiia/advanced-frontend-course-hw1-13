document.addEventListener("DOMContentLoaded", function() {
    var aud = document.getElementsByTagName("audio");

    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "KeyA":
                aud[0].play();
                break;
            case "KeyS":
                aud[1].play();
                break;
            case "KeyE":
                aud[2].play();
                break;
            case "KeyF":
                aud[3].play();
                break;
            case "KeyH":
                aud[4].play();
                break;
            case "KeyU":
                aud[5].play();
                break;
            case "KeyK":
                aud[6].play();
                break;
            case "KeyL":
                aud[7].play();
                break;
        }
    });

    const buttons = document.getElementsByClassName("btn");

    for (const btn of buttons) {
        btn.addEventListener("click", function() {
            switch (btn.className) {
                case "btn button-a":
                    aud[0].play();
                    break;
                case "btn button-s":
                    aud[1].play();
                    break;
                case "btn button-e":
                    aud[2].play();
                    break;
                case "btn button-f":
                    aud[3].play();
                    break;
                case "btn button-h":
                    aud[4].play();
                    break;
                case "btn button-u":
                    aud[5].play();
                    break;
                case "btn button-k":
                    aud[6].play();
                    break;
                case "btn button-l":
                    aud[7].play();
                    break;
            }
        });
    }
});
