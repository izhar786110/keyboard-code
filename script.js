let text = document.querySelector(".text");
let container = document.querySelector(".container");
let keyHistory = [];
let audio = new Audio('keypress-sound.mp3'); // Add your sound file here

window.addEventListener("keypress", (e) => {
    audio.play();
    
    container.innerHTML = "";
    
    let key = document.createElement("span");
    key.classList.add("key");
    key.innerText = e.key;

    text.innerText = `You Pressed`
    text.append(key);

    let keyCode = document.createElement("span");
    keyCode.classList.add("key-code")
    keyCode.innerText = e.keyCode;

    container.append(text, keyCode);

    keyHistory.push(e.key);
    console.log("Key History:", keyHistory);
});

window.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.altKey || e.shiftKey) {
        container.innerHTML = "";
        
        let combination = [];
        if (e.ctrlKey) combination.push("Ctrl");
        if (e.altKey) combination.push("Alt");
        if (e.shiftKey) combination.push("Shift");
        combination.push(e.key);

        let combinationText = combination.join(" + ");
        
        let key = document.createElement("span");
        key.classList.add("key");
        key.innerText = combinationText;

        text.innerText = `You Pressed`
        text.append(key);

        let keyCode = document.createElement("span");
        keyCode.classList.add("key-code")
        keyCode.innerText = e.keyCode;

        container.append(text, keyCode);
        keyHistory.push(combinationText);
        console.log("Key History:", keyHistory);
    }
});
