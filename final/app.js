/*
  quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');

// quiz questions
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("Is 911 a prime number?", "Yes", ["No"]));
questions.push(new Question("Which major bank went bankrupt during the subprime crisis of 2008?", "Lehman Brothers", ["Goldman Sachs", "Morgan Stanley", "Citibank"]));
questions.push(new Question("Which country has the highest reported number of COVID-19 cases?", "United States", ["Russia", "India", "Italy", "China"]));
questions.push(new Question("Are you having fun?", "Yes", []));

console.log(questions);


// events
startButton.addEventListener('click', function() {
  startButton.classList.add('disable');
  message.textContent = "Choose an answer!";
  loadNextQuestion();
});

nextButton.addEventListener('click', function() {
  quizContainer.textContent = ''; // hacky way to remove quiz html
  nextButton.classList.add('disable');
  currentQuestion++;
  loadNextQuestion();
  message.textContent = "Choose an answer!";
});

endButton.addEventListener('click', function() {
  quizContainer.textContent = ''; // hacky way to remove quiz html
  endButton.classList.add('disable');
  // message.textContent = "You got " + score + " out of " + questions.length + "!";
  message.textContent = `You got ${score} out of ${questions.length}! `;

  // add extra message
  if (score == 4) {
    message.textContent += "You won! You can afford your own studio in Manhattan now!";
  }
});


// callback function
function loadNextQuestion() {

  let question = questions[currentQuestion].getHTML();
  quizContainer.appendChild(question);

}

function questionAnswered(isCorrect) {
  if (isCorrect) {
    message.textContent = "Correct!";
    score++;
  } else {
    message.textContent = "Nope!";
  }

  // if there are more questions
  if (currentQuestion < questions.length - 1) {
    nextButton.classList.remove('disable');
  } else {
    endButton.classList.remove('disable');
  }
}


// helper function to create html elements
function createElement(tagName, className, text) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
}
