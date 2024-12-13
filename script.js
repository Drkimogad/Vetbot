const messages = document.getElementById('chatbot-messages');

function addMessage(sender, text) {
    const message = document.createElement('div');
    message.textContent = `${sender}: ${text}`;
    message.style.margin = '5px 0';
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function processInput() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (!userInput) return;

    addMessage('You', userInput);
    document.getElementById('userInput').value = '';

    // Simulated responses
    let response = '';
    if (userInput.includes('hello') || userInput.includes('hi')) {
        response = 'Hello! How can I assist you today?';
    } else if (userInput.includes('vaccination')) {
        response = 'Vaccines are vital for your pet’s health. Here’s a guide: [Link].';
    } else if (userInput.includes('business tips')) {
        response = 'Consider using social media and local partnerships to grow your client base.';
    } else if (userInput.includes('grooming')) {
        response = 'Grooming depends on the pet’s breed. Long-haired pets may need weekly grooming.';
    } else {
        response = 'I’m not sure about that. Check out our blog for more tips: [Link].';
    }

    addMessage('VetBot', response);
}