
const messages = document.getElementById('chatbot-messages');

function addMessage(sender, text) {
    const message = document.createElement('div');
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    message.style.margin = '10px 0';
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function processInput() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (!userInput) return;

    addMessage('You', userInput);
    document.getElementById('userInput').value = '';

    let response = '';
    if (userInput.includes('hello') || userInput.includes('hi')) {
        response = `Hello! How can I assist you today? 
        <ul>
            <li><a href="https://pawsitivevet2024.wordpress.com/blog-2/" target="_blank">Veterinary Insights and Tips</a></li>
            <li><a href="https://pawsitivevet2024.wordpress.com/vet-management-tips/" target="_blank">Vet Management Tips</a></li>
            <li><a href="https://pawsitivevet2024.wordpress.com/understanding-canine-behavior-problems/" target="_blank">Podcast: Canine Behavior</a></li>
        </ul>`;
    } else if (userInput.includes('vaccination')) {
        response = `Vaccines are vital for your pet’s health. Learn more on our <a href="https://pawsitivevet2024.wordpress.com/blog-2/" target="_blank">Vaccination Insights</a>.`;
    } else if (userInput.includes('business tips')) {
        response = `Check out our <a href="https://pawsitivevet2024.wordpress.com/vet-management-tips/" target="_blank">Veterinary Business Tips</a> for expert advice.`;
    } else if (userInput.includes('blog')) {
        response = `Visit our blog for more insights: <a href="https://pawsitivevet2024.wordpress.com/blog-2/" target="_blank">Veterinary Blog</a>.`;
    } else if (userInput.includes('podcast')) {
        response = `Listen to our podcast on <a href="https://pawsitivevet2024.wordpress.com/understanding-canine-behavior-problems/" target="_blank">Understanding Canine Behavior Problems</a>.`;
    } else {
        response = `I'm not sure about that. Explore more on our <a href="https://pawsitivevet2024.wordpress.com/" target="_blank">homepage</a>.`;
    }

    addMessage('VetBot', response);
}
