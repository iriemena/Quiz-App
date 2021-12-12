const quizData = [
  {
    question: "Which of the following is not an international organisation?",
    a: "FIFA",
    b: "NATO",
    c: "ASEAN",
    d: "FBI",
    answer: "d",
  },
  {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    a: "Pacific Ocean",
    b: "Atlantic Ocean",
    c: "Indian Ocean",
    d: "Arctic Ocean",
    answer: "a",
  },
  {
    question: "What is actually electricity?",
    a: "A flow of water",
    b: "A flow of air",
    c: "A flow of electrons",
    d: "A flow of atoms",
    answer: "c",
  },
  {
    question: "Which of the following disorders is the fear of being alone?",
    a: "Agoraphobia",
    b: "Aerophobia",
    c: "Acrophobia",
    d: "Arachnophobia",
    answer: "a",
  },
  {
    question: "What is the speed of sound?",
    a: "120 km/h",
    b: "1,200 km/h",
    c: "400 km/h",
    d: "700 km/h",
    answer: "b",
  },
  {
    question: "Which is the easiest way to tell the age of many trees?",
    a: "To measure the width of the tree",
    b: "To count the rings on the trunk",
    c: "To count the number of leaves",
    d: "To measure the height of the tree",
    answer: "b",
  },
  {
    question: "What do we call a newly hatched butterfly?",
    a: "A moth",
    b: "A butter",
    c: "A caterpillar",
    d: "A chrysalis",
    answer: "c",
  },
  {
    question: "What is the main component of the sun?",
    a: "Liquid lava",
    b: "Gas",
    c: "Molten iron",
    d: "Rock",
    answer: "b",
  },
  {
    question: "Which of the following animals can run the fastest?",
    a: "Cheetah",
    b: "Leopard",
    c: "Tiger",
    d: "Lion",
    answer: "a",
  },
  {
    question: "Where did the powers of Spiderman come from?",
    a: "He was born with them",
    b: "He was bitten by a radioactive spider",
    c: "He went through a scientific experiment",
    d: "He woke up with them after a dream",
    answer: "b",
  },
];

const qtn = document.querySelector(".qtn");
const add = document.querySelector(".add");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const inputEl = document.querySelectorAll("input");
const container = document.querySelector(".container");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const data = quizData[currentQuiz];
  qtn.innerHTML = data.question;
  a.innerHTML = data.a;
  b.innerHTML = data.b;
  c.innerHTML = data.c;
  d.innerHTML = data.d;
};
loadQuiz();

const selectedEl = () => {
  let selected = undefined;
  inputEl.forEach((input) => {
    if (input.checked) {
      selected = input.id;
    }
  });
  if (selected === quizData[currentQuiz].answer) {
    score += 10;
  }
  return selected;
};

const deselectEl = () => {
  inputEl.forEach((el) => {
    return (el.checked = false);
  });
};

add.addEventListener("click", () => {
  const answer = selectedEl();
  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      container.innerHTML = `<h2>Your score is ${score}% </br><button onclick="location.reload()">Retake?</button></h2>`;
    }
  }
  deselectEl();
});
