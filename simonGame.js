let gameSq = [];
let userSq = [];
let highScore = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250)
}
function levelUp() {
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    // console.dir(randColor);
    gameSq.push(randColor);
    console.log(gameSq);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function checkAns(index) {
    if (gameSq[index] === userSq[index]) {
        if (userSq.length == gameSq.length) {
            setTimeout(levelUp, 1000);
            highestScore(level);

        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> </br> Please press any key for start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    console.log(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSq.push(userColor);
    checkAns(userSq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSq = [];
    userSq = [];
    level = 0;
}

function highestScore(level) {
    highScore.push(level);
    console.log(highScore);
    let max = 0;
    for (digit of highScore) {
        if (digit > max) {
            max = digit;
        }
    }
    console.log(max);
    let score = document.querySelector("h3");
    score.innerHTML = `Highest score was <b>${max}</b>`
}