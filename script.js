const startBtn = document.getElementById("start-btn"),
  // restartBtn = document.getElementById("restart-btn"),
  startPage = document.getElementById("start-page"),
  endPage = document.getElementById("end-page"),
  questionContainer = document.getElementById("question-container"),
  optionContainer = document.getElementById("option-container"),
  scoreContainer = document.getElementById("score-container"),
  scoreValue = document.getElementById("score");



let counter = 0;
let currentScore = 0;
let startButton = document.getElementById('start-btn'); // Assuming your button has this ID
let games = 0;

var data = ""
const url = "https://script.google.com/macros/s/AKfycbymkypYB1eyUsHQ1yJBEjkRDt3HHT7FHj4_8lOjq-JnmASR11uMLPzZlHydMMWeD7xudg/exec";
(async () => {
  startButton.disabled = true;
  data = await (await fetch(url)).json();
  startButton.disabled = false;
})();

// start game function
function startGame() {
  console.log(data['questions'])
  optionContainer.classList.remove("clicked");
  !endPage.classList.contains("hide") ? endPage.classList.add("hide") : false;
  startPage.classList.add("hide");
  questionContainer.classList.remove("hide");
  optionContainer.classList.remove("hide");
  scoreContainer.classList.remove("hide");
  currentScore = 0;
  scoreValue.innerText = currentScore;
  showQuestion();
  games++;
}

// update score
function updateScore() {
  scoreValue.innerText = ++currentScore;
}

// show question to tiles
function showQuestion() {
  let currentQuestion = document.createElement("p");
  currentQuestion.innerText = data['questions'][counter].question;
  questionContainer.appendChild(currentQuestion);
  for (let option of data['questions'][counter].options.sort(() => Math.random() - 0.5)) {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = selectAnswer;
    btn.classList.add("btn", "option");
    optionContainer.appendChild(btn);
  }
}

// select answer
function selectAnswer(e) {
  let selectedAnswer = e.target;
  optionContainer.classList.add("clicked");
  // check the selected answer
  if (selectedAnswer.innerText === data['questions'][counter].answer) {
    // when selected answer is correct
    selectedAnswer.classList.add("correct");
    updateScore();
  } else {
    //when wrong
    selectedAnswer.classList.add("wrong");
  }
  /* 
  selectedAnswer.innerText === data[counter].answer
    ? selectedAnswer.classList.add("correct")
    : selectedAnswer.classList.add("wrong"); */
  // console.log(selectedAnswer.classList);
  // nextBtn.classList.remove("hide");
  showCorrect();
}

// show correct answer and next btn
function showCorrect() {
  let options = Array.from(document.getElementsByClassName("option"));
  // console.log(options);
  options
    .filter((option) => option.innerText === data['questions'][counter].answer)
    .map((correct) => correct.classList.add("correct"));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// show the next question
async function nextQuestion() {
  await sleep(2000);
  if (counter >= 4) {
    return endGame();
  }
  questionContainer.innerHTML = ``;
  optionContainer.innerHTML = ``;
  counter++;
  showQuestion();
  optionContainer.classList.remove("clicked");
}

// end game
function endGame() {
  counter = 0;
  questionContainer.innerHTML = ``;
  optionContainer.innerHTML = ``;
  
  scoreContainer.classList.add("hide");
  endPage.classList.remove("hide");
  if (currentScore == 5) {
    endPage.innerHTML = `
    <h1>Ganaste!</h1>
    <p>Tu puntuación ${currentScore}/5.</p>
    <div class='end-page-buttons'>
    <button id="end-btn" class="restart-btn btn" onclick='location.reload()'>End Game</button>
    </div>
    `;
  } else if (games > 2) {
    endPage.innerHTML = `
    <h1>Game Over!</h1>
    <p>Tu puntuación ${currentScore}/5.</p>
    <div class='end-page-buttons'>
    <button id="end-btn" class="restart-btn btn" onclick='location.reload()'>End Game</button>
    </div>
    `;
  } else {
    endPage.innerHTML = `
    <h1>Game Over!</h1>
    <p>Tu puntuación ${currentScore}/5.</p>
    <div class='end-page-buttons'>
    <button id="restart-btn" class="start-btn btn" onclick='startGame()'>Restart Game</button>
    <button id="end-btn" class="restart-btn btn" onclick='location.reload()'>End Game</button>
    </div>
    `;
  }
  
}

function saveEmail() {
  var email = document.getElementById('player-email').value
  var name = document.getElementById('player-name').value
  fetch("https://script.google.com/macros/s/AKfycbz4itKySidEpIxhzjN2unvC0jNgdwMzMyW8_GZ19bCHY0mP9Mhu7HVurN7kuCcMuTa0MQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email
    }),
    headers: {
      'Content-Type': "text/plain;charset=utf-8"
    }
  })
}

// event listeners
startBtn.addEventListener("click", startGame);
optionContainer.addEventListener("click", nextQuestion);
// restartBtn.addEventListener("click", startGame);
