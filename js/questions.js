import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = 'empty';
// 코딩 1:8 웹 개발 왕 초보 // 수강생 김현덕
// 2023-12-13 22:34
function renderQustion() {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%';
}

function nextQuestion(choiceNumber) {
  const question = questions[currentNumber];
  if(mbti === 'empty') { 
    mbti = question.choices[choiceNumber].value; 
  } else { 
    mbti = mbti + question.choices[choiceNumber].value;
  }
  currentNumber+=1;
  renderQustion();
}

function showResultPage() {
  location.href = `/results.html?mbti=${mbti}`;
}
choice1El.addEventListener('click', function() { nextQuestion(0) });
choice2El.addEventListener('click', function() { nextQuestion(1) });

renderQustion();