"use strict";
const quizQuestions = [
    {
        question: "What is the correct way to define a variable in TypeScript?",
        options: [
            "var variableName: type",
            "let variableName: type",
            "const variableName: type",
            "All of the above",
        ],
        correctAnswer: "const variableName: type",
    },
    {
        question: "Which type is not a valid TypeScript type?",
        options: ["string", "number", "object", "element"],
        correctAnswer: "object",
    },
    {
        question: "How do you define an interface in TypeScript?",
        options: [
            "interface InterfaceName {}",
            "class InterfaceName {}",
            "type InterfaceName = {}",
            "All of the above",
        ],
        correctAnswer: "interface InterfaceName {}",
    },
    {
        question: "How do you specify an optional property in an interface?",
        options: [
            "propertyName?: type",
            "propertyName: type?",
            "propertyName!: type",
            "propertyName: type!",
        ],
        correctAnswer: "propertyName?: type",
    },
    {
        question: "Which of the following is used to define a constant in TypeScript?",
        options: [
            "let",
            "var",
            "const",
            "static",
        ],
        correctAnswer: "const",
    },
    {
        question: "What is the primary purpose of TypeScript?",
        options: [
            "To provide static typing for JavaScript",
            "To replace JavaScript entirely",
            "To make JavaScript run faster",
            "To create mobile applications",
        ],
        correctAnswer: "To provide static typing for JavaScript",
    },
    {
        question: "Which of the following is a valid way to declare a variable in TypeScript?",
        options: [
            "var name: string = 'John';",
            "let name: string = 'John';",
            "const name: string = 'John';",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
    {
        question: "What does the 'any' type represent in TypeScript?",
        options: [
            "A specific type that cannot be changed",
            "A type that can hold any value",
            "A type that must always be null",
            "A type that must always be a string",
        ],
        correctAnswer: "A type that can hold any value",
    },
    {
        question: "Which symbol is used for type assertions in TypeScript?",
        options: [
            "!",
            "?",
            "as",
            "typeof",
        ],
        correctAnswer: "as",
    },
    {
        question: "Which keyword is used to create a class in TypeScript?",
        options: [
            "class",
            "create",
            "new",
            "define"
        ],
        correctAnswer: "class",
    }
];
const question_ele = document.querySelector("#question");
const radioInputContainer = document.querySelector("#radio-input-container");
const nextBtn = document.querySelector("#next_btn");
const backBtn = document.querySelector("#back_btn");
const quiz_container = document.querySelector("#quiz_container");
const result_container = document.querySelector("#result_container");
let currentInd = 0;
let RightAnswers = 0;
let wrongAnswers = 0;
const selectedAnswers = Array(quizQuestions.length).fill(""); // Array to store selected answers
renderQuizToHTML();
function renderQuizToHTML() {
    radioInputContainer.innerHTML = "";
    if (currentInd === quizQuestions.length) {
        quiz_container.style.display = 'none';
        result_container.style.display = 'block';
        result_container.innerHTML = `
       <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div class="flex items-center justify-center w-64 h-64 rounded-full mb-4 text-white ${RightAnswers > wrongAnswers ? 'bg-green-500' : 'bg-red-500'}">
                    <h1 class="text-4xl font-bold text-center">
                        ${RightAnswers > wrongAnswers ? "You Win!" : "You Lose!"}
                    </h1>
                </div>
                <h1 class="text-2xl font-semibold">
                    Right Answers: ${RightAnswers}
                </h1>
                <h1 class="text-2xl font-semibold">
                    Wrong Answers: ${wrongAnswers}
                </h1>
            </div>
      `;
    }
    else {
        const que = quizQuestions[currentInd];
        question_ele.innerText = `${currentInd + 1}) ${que.question}`;
        // Render options with checked state
        que.options.forEach((data) => {
            const isChecked = selectedAnswers[currentInd] === data; // Check if this option is selected
            radioInputContainer.innerHTML += `
              <label class="my-2">
                  <input type="radio" name=${`question-${currentInd}`} value="${data}" ${isChecked ? 'checked' : ''} />
                  <span class="pl-2">${data}</span>
              </label>
          `;
        });
    }
    if (currentInd === quizQuestions.length - 1) {
        nextBtn.innerText = "Submit";
        nextBtn.style.backgroundColor = "red";
        nextBtn.style.color = "white";
    }
    else {
        nextBtn.innerText = "NEXT";
    }
}
nextBtn.addEventListener('click', () => {
    const selected = document.querySelector(`input[name="question-${currentInd}"]:checked`);
    if (selected) {
        // console.log("User value =>",selected.value);
        // console.log("correct Answer =>", quizQuestions[currentInd].correctAnswer);
        // console.log("Right OR Wrong =>", selected.value == quizQuestions[currentInd].correctAnswer);
        selectedAnswers[currentInd] = selected.value; // Store the selected answer
        if (selected.value === quizQuestions[currentInd].correctAnswer) {
            RightAnswers++;
        }
        else {
            wrongAnswers++;
        }
        currentInd++;
        renderQuizToHTML();
    }
});
backBtn.addEventListener('click', () => {
    if (currentInd > 0) {
        currentInd--; // Decrease current index by one
        renderQuizToHTML(); // Render the previous question
    }
});
