const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")
const $scoreDisplay = document.querySelector(".score-display")
const $progressBar = document.getElementById("progress-bar")
const $progressText = document.getElementById("progress-text")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  // Resetar pontuação ao iniciar novo jogo
  totalCorrect = 0
  currentQuestionIndex = 0
  updateScore()
  updateProgress()
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button", "answer")
    newAnswer.textContent = answer.text
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAnswer)

    newAnswer.addEventListener("click", selectAnswer)
  })
  
  updateProgress()
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
    updateScore()
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function updateScore() {
  $scoreDisplay.textContent = `Pontuação: ${totalCorrect}`
}

function updateProgress() {
  const progress = ((currentQuestionIndex) / questions.length) * 100
  $progressBar.style.width = `${progress}%`
  $progressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""
  let emoji = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente! 🎉"
      emoji = "🥇"
      break
    case (performance >= 70):
      message = "Muito bom! 👍"
      emoji = "🥈"
      break
    case (performance >= 50):
      message = "Bom! 🙂"
      emoji = "🥉"
      break
    default:
      message = "Pode melhorar! 💪"
      emoji = "📚"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      ${emoji} Você acertou ${totalCorrect} de ${totalQuestions} questões! ${emoji}
      <span>${message}</span>
    </p>
    <div class="final-buttons">
      <button 
        onclick="window.location.reload()" 
        class="button"
      >
        <i class="fas fa-redo"></i> Refazer teste
      </button>

      <button 
        onclick="window.location.href='tela-inicial.html'" 
        class="button"
      >
        <i class="fas fa-home"></i> Voltar ao Início
      </button>
    </div>
  `
}

const questions = [
  {
    question: "Qual a função da tag <a> em HTML?",
    answers: [
      { text: "Criar listas", correct: false },
      { text: "Inserir imagens", correct: false },
      { text: "Criar links", correct: true },
      { text: "Definir parágrafos", correct: false }
    ]
  },
  {
    question: "Qual atributo da tag <img> é usado para definir o texto alternativo da imagem?",
    answers: [
      { text: "src", correct: false },
      { text: "alt", correct: true },
      { text: "href", correct: false },
      { text: "title", correct: false }
    ]
  },
  {
    question: 'Qual das opções abaixo representa a estrutura básica de um documento HTML?"',
    answers: [
      { text: '<html> <header> <body>', correct: false },
      { text: '<html> <head> <body>', correct: true },
      { text: ' <html> <head> <content>', correct: false },
      { text: '<html> <meta> <body>', correct: false }
    ]
  },
  {
    question: 'A tag <table> é usada para criar tabelas em HTML.',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: 'Qual atributo é usado para abrir um link em uma nova aba ou janela?',
    answers: [
      { text: 'href="_new"', correct: false },
      { text: 'open="true"', correct: false },
      { text: 'target="_blank"', correct: true },
      { text: ' link="new"', correct: false }
    ]
  },
]