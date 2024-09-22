const startBtn = document.getElementById("start-btn"),
  // restartBtn = document.getElementById("restart-btn"),
  startPage = document.getElementById("start-page"),
  endPage = document.getElementById("end-page"),
  questionContainer = document.getElementById("question-container"),
  optionContainer = document.getElementById("option-container"),
  scoreContainer = document.getElementById("score-container"),
  scoreValue = document.getElementById("score");


// array of questions
let data = [
  {
    "question": "¿Cuál es la unidad básica de la vida?",
    "options": ["Átomo", "Célula", "Tejido", "Órgano"],
    "answer": "Célula"
  },
  {
    "question": "¿Qué orgánulo se encarga de la producción de energía en las células?",
    "options": ["Ribosoma", "Mitocondria", "Cloroplasto", "Núcleo"],
    "answer": "Mitocondria"
  },
  {
    "question": "¿Qué tipo de RNA lleva la información genética del ADN a los ribosomas?",
    "options": ["mRNA", "tRNA", "rRNA", "siRNA"],
    "answer": "mRNA"
  },
  {
    "question": "¿Qué tipo de organismos son los que producen su propio alimento?",
    "options": ["Heterótrofos", "Autótrofos", "Parásitos", "Descomponedores"],
    "answer": "Autótrofos"
  },
  {
    "question": "¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía?",
    "options": ["Respiración", "Fermentación", "Fotosíntesis", "Quimiosíntesis"],
    "answer": "Fotosíntesis"
  },
  {
    "question": "¿Qué estructura celular es responsable de la síntesis de proteínas?",
    "options": ["Ribosomas", "Mitocondrias", "Lisososmas", "Vacuolas"],
    "answer": "Ribosomas"
  },
  {
    "question": "¿Cuál es la función principal del sistema circulatorio?",
    "options": ["Respirar", "Transportar nutrientes", "Filtrar desechos", "Producir hormonas"],
    "answer": "Transportar nutrientes"
  },
  {
    "question": "¿Qué tipo de células tienen pared celular?",
    "options": ["Células animales", "Células vegetales", "Células procariotas", "Ambas"],
    "answer": "Ambas"
  },
  {
    "question": "¿Cuál es el principal componente del ADN?",
    "options": ["Aminoácidos", "Nucleótidos", "Carbohidratos", "Ácidos grasos"],
    "answer": "Nucleótidos"
  },
  {
    "question": "¿Cómo se llama el proceso de división celular en células eucariotas?",
    "options": ["Mitosis", "Meiosis", "Citosinesis", "Fagocitosis"],
    "answer": "Mitosis"
  },
  {
    "question": "¿Qué órgano es responsable de la filtración de sangre en el cuerpo humano?",
    "options": ["Hígado", "Corazón", "Riñón", "Pulmón"],
    "answer": "Riñón"
  },
  {
    "question": "¿Cuál es el pH neutro en la escala de pH?",
    "options": ["0", "5", "7", "14"],
    "answer": "7"
  },
  {
    "question": "¿Qué tipo de enlace une a los átomos en una molécula de agua?",
    "options": ["Enlace iónico", "Enlace covalente", "Enlace metálico", "Interacción hidrofóbica"],
    "answer": "Enlace covalente"
  },
  {
    "question": "¿Cuál es la función principal de los glóbulos rojos?",
    "options": ["Defensa inmunológica", "Transporte de oxígeno", "Coagulación de sangre", "Regulación de temperatura"],
    "answer": "Transporte de oxígeno"
  },
  {
    "question": "¿Qué tipo de tejido conecta músculos a huesos?",
    "options": ["Tejido epitelial", "Tejido conectivo", "Tejido muscular", "Tejido nervioso"],
    "answer": "Tejido conectivo"
  },
  {
    "question": "¿Qué tipo de microorganismo es responsable de la fermentación?",
    "options": ["Virus", "Bacterias", "Hongos", "Ambos"],
    "answer": "Ambos"
  },
  {
    "question": "¿Cuál es el nombre de la teoría que explica cómo las especies evolucionan?",
    "options": ["Teoría del Big Bang", "Teoría de la relatividad", "Teoría de la evolución por selección natural", "Teoría de cuerdas"],
    "answer": "Teoría de la evolución por selección natural"
  },
  {
    "question": "¿Qué parte de la célula contiene el material genético?",
    "options": ["Citosol", "Mitocondria", "Núcleo", "Membrana plasmática"],
    "answer": "Núcleo"
  },
  {
    "question": "¿Qué tipo de células son los linfocitos?",
    "options": ["Células rojas", "Células blancas", "Células epiteliales", "Células madre"],
    "answer": "Células blancas"
  },
  {
    "question": "¿Cuál es la función de las enzimas en el cuerpo?",
    "options": ["Acelerar reacciones químicas", "Almacenar energía", "Producir hormonas", "Regular el pH"],
    "answer": "Acelerar reacciones químicas"
  },
  {
    "question": "¿Qué proceso se lleva a cabo en el aparato de Golgi?",
    "options": ["Síntesis de proteínas", "Modificación y empaquetamiento de proteínas", "Producción de energía", "Digestión celular"],
    "answer": "Modificación y empaquetamiento de proteínas"
  },
  {
    "question": "¿Qué elemento es esencial para la formación de proteínas?",
    "options": ["Carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
    "answer": "Nitrógeno"
  },
  {
    "question": "¿Qué tipo de herencia resulta en un fenotipo intermedio?",
    "options": ["Herencia dominante", "Herencia recesiva", "Herencia codominante", "Herencia incompleta"],
    "answer": "Herencia incompleta"
  },
  {
    "question": "¿Cuál es el objetivo principal de la mitosis?",
    "options": ["Producción de gametos", "Crecimiento y reparación celular", "Producción de energía", "Eliminación de desechos"],
    "answer": "Crecimiento y reparación celular"
  },
  {
    "question": "¿Qué parte del cerebro es responsable de la coordinación y el equilibrio?",
    "options": ["Corteza cerebral", "Cerebelo", "Tallo encefálico", "Sistema límbico"],
    "answer": "Cerebelo"
  },
  {
    "question": "¿Cuál es la principal función de la clorofila?",
    "options": ["Absorber oxígeno", "Capturar luz solar", "Almacenar energía", "Sintetizar azúcares"],
    "answer": "Capturar luz solar"
  },
  {
    "question": "¿Qué tipo de metabolismo utiliza la energía del sol?",
    "options": ["Metabolismo anaeróbico", "Metabolismo aerobico", "Metabolismo fotosintético", "Metabolismo celular"],
    "answer": "Metabolismo fotosintético"
  },
  {
    "question": "¿Cuál es la estructura responsable de la síntesis de lípidos?",
    "options": ["Ribosomas", "Retículo endoplásmico liso", "Aparato de Golgi", "Mitocondria"],
    "answer": "Retículo endoplásmico liso"
  },
  {
    "question": "¿Qué tipo de simbiosis beneficia a ambos organismos?",
    "options": ["Parasitismo", "Comensalismo", "Mutualismo", "Depredación"],
    "answer": "Mutualismo"
  },
  {
    "question": "¿Qué es un ecosistema?",
    "options": ["Conjunto de organismos de la misma especie", "Conjunto de poblaciones en un área", "Conjunto de organismos y su entorno", "Conjunto de tejidos y células"],
    "answer": "Conjunto de organismos y su entorno"
  },
  {
    "question": "¿Cuál es el principal gas de efecto invernadero producido por los humanos?",
    "options": ["Oxígeno", "Dióxido de carbono", "Metano", "Nitrógeno"],
    "answer": "Dióxido de carbono"
  },
  {
    "question": "¿Qué tipo de macromolécula son las enzimas?",
    "options": ["Carbohidratos", "Lípidos", "Proteínas", "Ácidos nucleicos"],
    "answer": "Proteínas"
  },
  {
    "question": "¿Cuál es la función del sistema inmunológico?",
    "options": ["Regular la temperatura corporal", "Producir hormonas", "Defender contra patógenos", "Transportar oxígeno"],
    "answer": "Defender contra patógenos"
  }
  /*{
    question: "?",
    options: ["", "", "", ""],
    answer: "",
  },
  {
    question: "?",
    options: ["", "", "", ""],
    answer: "",
  }, */
  /* {
    question: "?",
    options: ["", "", "", ""],
    answer: "",
  }, */
];

let counter = 0;
let currentScore = 0;

// start game function
function startGame() {
  //shuffle data array
  data = data.sort(() => Math.random() - 0.5);
  optionContainer.classList.remove("clicked");
  !endPage.classList.contains("hide") ? endPage.classList.add("hide") : false;
  startPage.classList.add("hide");
  questionContainer.classList.remove("hide");
  optionContainer.classList.remove("hide");
  scoreContainer.classList.remove("hide");
  currentScore = 0;
  scoreValue.innerText = currentScore;
  showQuestion();
}

// update score
function updateScore() {
  scoreValue.innerText = ++currentScore;
}

// show question to tiles
function showQuestion() {
  let currentQuestion = document.createElement("p");
  currentQuestion.innerText = data[counter].question;
  questionContainer.appendChild(currentQuestion);
  for (let option of data[counter].options.sort(() => Math.random() - 0.5)) {
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
  if (selectedAnswer.innerText === data[counter].answer) {
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
    .filter((option) => option.innerText === data[counter].answer)
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
    <p>You scored ${currentScore}/5.</p>
    Email<input type="email" name="email" id="">
    <div class='end-page-buttons'>
    <button id="end-btn" class="restart-btn btn" onclick='location.reload()'>End Game</button>
    </div>
    `;
  } else {
    endPage.innerHTML = `
    <h1>Game Over!</h1>
    <p>You scored ${currentScore}/5.</p>
    Email<input type="email" name="email" id="">
    <button id="restart-btn" class="start-btn btn" onclick='saveEmail()'>Enviar</button>
    <div class='end-page-buttons'>
    <button id="restart-btn" class="start-btn btn" onclick='startGame()'>Restart Game</button>
    <button id="end-btn" class="restart-btn btn" onclick='location.reload()'>End Game</button>
    </div>
    `;
  }
  
}

function saveEmail() {
  fetch("https://script.google.com/macros/s/AKfycbztfVxNKMpWujhO1zqnEV21AnBuyMAAymi3j39cYPxhYZcHZ8rw6X2w0x5Js2NSp0TV/exec", {
    method: "POST",
    body: JSON.stringify({
      email: "agustinbasile@gmail.com"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

// event listeners
startBtn.addEventListener("click", startGame);
optionContainer.addEventListener("click", nextQuestion);
// restartBtn.addEventListener("click", startGame);
