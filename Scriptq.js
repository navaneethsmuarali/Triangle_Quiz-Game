const quizForm = document.getElementById('quiz_form');
const submitButton = document.getElementById('submit_ans');
const output = document.getElementById('output');


const correctAnswers = ["90", "right angled"];

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    let score = 0;
    let index = 0;

    for (let entry of formData.entries()) {
        const userAnswer = entry[1];
        if (userAnswer === correctAnswers[index]) {
            score++;
        }
        index++;
    }

    output.textContent = `You scored ${score} out of ${correctAnswers.length}`;
});