let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game is Started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250); // 1/4 time
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250); // 1/4 time
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose

    let ranIdx = Math.floor(Math.random() *3);
    let ranCol = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranCol}`);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    btnFlash(ranBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        setTimeout(levelUp, 2000);
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this; 
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let AllBtns = document.querySelectorAll(".btn");

for (btn of AllBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
