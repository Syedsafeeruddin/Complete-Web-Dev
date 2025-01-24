document.addEventListener("DOMContentLoaded", () => {
    
    const questions = [
        {
            question: "Which country has won the most FIFA World Cups?",
            choices: ["Brazil", "Germany", "Italy", "Argentina"],
            answer: "Brazil"
        },
        {
            question: "Who won the Ballon d'Or in 2021?",
            choices: ["Robert Lewandowski", "Lionel Messi", "Cristiano Ronaldo", "Karim Benzema"],
            answer: "Lionel Messi"
        },
        {
            question: "In which year was the first FIFA World Cup held?",
            choices: ["1930", "1940", "1950", "1960"],
            answer: "1930"
        },
        {
            question: "Which country hosted the FIFA World Cup 2018?",
            choices: ["Brazil", "Russia", "Germany", "South Africa"],
            answer: "Russia"
        },
        {
            question: "Who scored the winning goal in the 2014 FIFA World Cup final?",
            choices: ["Lionel Messi", "Mario Götze", "Thomas Müller", "Neymar"],
            answer: "Mario Götze"
        }
    
    ]

    const questionContainer = document.getElementById('question-container')
    const chociesList = document.getElementById('choices-list')
    const nextBtn = document.getElementById('next-btn')
    const resultContainer = document.getElementById('result-container')
    const scoreDisplay = document.getElementById('score')
    const questionText = document.getElementById('question-text')
    const restartBtn = document.getElementById('restart-btn')
    const startBtn = document.getElementById('start-btn')

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz)
    nextBtn.addEventListener('click', () => {
        if(currentQuestionIndex < questions.length -1){
            currentQuestionIndex++
            showQuiz()
        }else{
            nextBtn.classList.add('hidden')
            showResults()
        }
    })

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add('hidden')
        nextBtn.classList.remove('hidden')
        showQuiz()
    })

    function startQuiz(){
        startBtn.classList.add('hidden')
        showQuiz()
    }

    function showQuiz(){
        questionContainer.classList.remove('hidden')
        chociesList.innerHTML = ''

        const question = questions[currentQuestionIndex].question
        questionText.textContent = question

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => {matchAnswer(choice)})
            chociesList.appendChild(li)
        })
        
        nextBtn.classList.remove('hidden')   
    }

    function matchAnswer(choice){
        const correctAnswers = questions[currentQuestionIndex].answer
        if(choice === correctAnswers){
            score++
        }
    }

    function showResults(){
        questionContainer.classList.add('hidden');
        nextBtn.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `Your score: ${score}/${questions.length}`;
    }
    
})