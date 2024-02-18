// script.js
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      topic: "Geography"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
      topic: "Mathematics"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
      topic: "Literature"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const feedback = document.getElementById('feedback');
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQ = questions[currentQuestion];
  
    questionElement.textContent = currentQ.question;
    optionsContainer.innerHTML = "";
  
    currentQ.options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.classList.add('option-btn');
      optionButton.onclick = () => checkAnswer(option);
  
      optionsContainer.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQ = questions[currentQuestion];
  
    if (selectedOption === currentQ.correctAnswer) {
      score++;
      feedback.textContent = "Correct!";
    } else {
      feedback.textContent = "Incorrect. The correct answer is: " + currentQ.correctAnswer;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <p>Based on your incorrect answers, you may want to review topics such as:</p>
      <ul>
        ${getIncorrectTopics().map(topic => `<li>${topic}</li>`).join("")}
      </ul>
    `;
  }
  
  function getIncorrectTopics() {
    const incorrectTopics = [];
  
    questions.forEach(question => {
      if (question.options.indexOf(question.correctAnswer) === -1) {
        incorrectTopics.push(question.topic);
      }
    });
  
    return [...new Set(incorrectTopics)]; // Remove duplicate topics
  }
  
  displayQuestion();
  