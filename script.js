let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let games = document.querySelector(".games");
let msgContainer = document.querySelector(".newgame");
let newGameBtn = document.querySelector(".ng");

let turnO = true;

let gameReset = () => {
    turnO = true;  
}

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnO = true;
    enalbleBoxes();
    msgContainer.classList.add("newgame")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            box.style.color = "red"
            turnO = false
            // console.log("Cliclked O");
        } else {
            box.innerText = "X"
            box.style.color = "blue"
            turnO = true
            // console.log("Cliclked X");
        }
        box.disabled = true
        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enalbleBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg .innerText = `Congragulation Winner : ${winner}`;
    msgContainer.classList.remove("newgame");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log( boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;

        if (position1Value != "" && position2Value != "" && position3Value != "") {
            if (position1Value === position2Value && position2Value === position3Value) {
                // console.log("Winner : ", position1Value);
                showWinner(position1Value)
                
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)


