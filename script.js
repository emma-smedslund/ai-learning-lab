const messageElement = document.getElementById('message');
const greetButton = document.getElementById('greetButton');

function showGreeting() {
  messageElement.textContent = 'Hello, beautiful being!';
}

greetButton.addEventListener('click', showGreeting);
