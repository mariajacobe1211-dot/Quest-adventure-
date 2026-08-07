// 🟢 Easy Round: typed answers
function checkDifficult(inputId, correctAnswer, nextPage) {
  const userAnswer = document.getElementById(inputId).value.trim();
  const feedback = document.getElementById(inputId + '-feedback');

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "✅ Correct! Proceeding...";
    feedback.style.color = "green";
    setTimeout(() => { window.location.href = nextPage; }, 1000);
  } else {
    feedback.textContent = "❌ Mali! Try again.";
    feedback.style.color = "red";
  }
}

// 🔴 Difficult Round: multiple choice
function checkChoice(correctAnswer, nextPage) {
  alert("✅ Tama! Proceeding...");
  window.location.href = nextPage;
}

function wrongChoice(feedbackId) {
  const feedback = document.getElementById(feedbackId);
  feedback.textContent = "❌ Mali! Ulitin mo.";
  feedback.style.color = "red";
}

// 🎈 Balloon pop + confetti
function popBalloon(balloon, message) {
  balloon.style.display = 'none';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = message;
  document.body.appendChild(popup);
  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.innerText = '🎉';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    confetti.style.position = 'absolute';
    confetti.style.fontSize = '24px';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}
