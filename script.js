const messageElement = document.getElementById('message');
const greetButton = document.getElementById('greetButton');

const boostingMessages = [
  "You've got this, Emma!",
  "Small steps still move you forward.",
  "Today is a great day to learn something new.",
  "Progress, not perfection.",
  "You're capable of more than you know.",
  "Every expert was once a beginner.",
  "Trust the process — you're doing great.",
];

function getTodaysMessage() {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysSinceEpoch = Math.floor(Date.now() / millisecondsPerDay);
  const index = daysSinceEpoch % boostingMessages.length;
  return boostingMessages[index];
}

function showGreeting() {
  messageElement.textContent = getTodaysMessage();
}

greetButton.addEventListener('click', showGreeting);
