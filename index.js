function calculateScore() {
    let score = 0;

    // Question 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "new-delhi") {
        score++;
    }

    // Question 2
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "mars") {
        score++;
    }

    // Question 3
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "earth") {
        score++;
    }

    // Question 4
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "tiger") {
        score++;
    }

    // Question 5
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === "ktr") {
        score++;
    }

    // Display result
    const resultElement = document.getElementById("result");
    resultElement.textContent='Your score is '+score;
    // resultElement.textContent = 'Your score is ';
}