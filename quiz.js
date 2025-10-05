document.addEventListener("DOMContent", () => {

function checkAnswer() {
    const correctAnswer = "4"; // ✅ Correct answer

    //Get the selected radio input
    const userSelection = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // If no answer is selected
    if (!userSelection) {
        feedback.textContent = "⚠️ Please select an answer before submitting!";
        feedback.style.color = "#ffc107"; // yellow
        return;
    }

    const userAnswer = userSelection.value;

    // Compare user's answer with the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "❌ That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// ✅ Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

});