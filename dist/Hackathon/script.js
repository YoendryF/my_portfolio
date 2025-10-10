//Compound Interest Calculator
document.getElementById('simulator-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compound = parseFloat(document.getElementById('value').value);

    const amount = principal * Math.pow((1 + rate / compound), (compound * time));
    const interest = amount - principal;

    document.getElementById('result').innerHTML = `
        <h3>Results:</h3>
        <p>Total Amount: $${amount.toFixed(2)}</p>
        <p>Interest Earned: $${interest.toFixed(2)}</p>
    `;

});

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const chatContainer = document.querySelector('.chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const apiToken = 'YOUR_API_TOKEN'; // Ideally, this token should come from a secure source (not hard-coded)

    // Function to handle sending the message
    async function sendMessage() {
        const userText = userInput.value.trim(); // Get user input

        if (userText === '') {
            return; // Do nothing if the input is empty
        }

        // Create a new chat message element for the user
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = `You: ${userText}`;
        chatContainer.appendChild(userMessage);

        // Clear the input field
        userInput.value = '';

        // Fetch bot's response from the API
        const botResponse = await getBotResponse(userText, apiToken);

        // Create a new chat message element for the bot
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = `Bot: ${botResponse}`;
        chatContainer.appendChild(botMessage);

        // Scroll to the bottom of the chat
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Function to get bot response from the API
    async function getBotResponse(userText, token) {
        try {
            const response = await fetch('https://api.example.com/getResponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Pass the token here
                },
                body: JSON.stringify({
                    message: userText
                })
            });

            if (response.ok) {
                const data = await response.json();
                return data.botReply || "I couldn't understand that."; // Extract response from API
            } else {
                return "Sorry, I couldn't reach the server.";
            }
        } catch (error) {
            console.error('Error fetching bot response:', error);
            return "There was an error processing your request.";
        }
    }

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for pressing 'Enter' key
    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});


//Website info
// Get the main element from the HTML
const mainContent = document.querySelector('main');

// Create and insert the basic information about the program
const programInfo = document.createElement('section');
programInfo.innerHTML = `
    <h2>About the Compound Interest Simulator</h2>
    <p>This program is designed to help users of a minority background simulate the effects of compound interest over time.</p>
`;

mainContent.appendChild(programInfo);

// Create and insert the team information
const teamSection = document.createElement('section');
teamSection.innerHTML = `
    <h2>Meet Our Team</h2>
    <div class="team-member">
        <img src="path-to-image1.jpg" alt="Team Member 1" class="team-photo">
        <p><strong>Yoendry Ferro="https://www.linkedin.com/in/fillinblank">LinkedIn</a></p>
    </div>
    <div class="team-member">
        <img src="path-to-image2.jpg" alt="Team Member 2" class="team-photo">
        <p><strong>Diego Mendoza="https://www.linkedin.com/in/fillinblank">LinkedIn</a></p>
    </div>
    <div class="team-member">
        <img src="path-to-image3.jpg" alt="Team Member 3" class="team-photo">
        <p><strong>William Christie</strong></p>="https://www.linkedin.com/in/fillinblank">LinkedIn</a></p>
    </div>
    <div class="team-member">
        <img src="path-to-image2.jpg" alt="Team Member 4" class="team-photo">
        <p><strong>Lucas Rolon="https://www.linkedin.com/in/fillinblank">LinkedIn</a></p>
    </div>
`;

// Append team information at the bottom of the main content
mainContent.appendChild(teamSection);

// Function to calculate compound interest
function calculateCompoundInterest(principal, rate, time, compound) {
    const amount = principal * Math.pow((1 + rate / compound), (compound * time));
    const interest = amount - principal;
    return { amount: amount.toFixed(2), interest: interest.toFixed(2) };
}

// Function to handle the good and bad examples
function showGoodAndBadExamples() {
    const goodExample = {
        principal: 10000,
        rate: 5 / 100,
        time: 10,
        compound: 4
    };

    const goodResult = calculateCompoundInterest(
        goodExample.principal,
        goodExample.rate,
        goodExample.time,
        goodExample.compound
    );

    const badExample = {
        principal: 10000,
        rate: -3 / 100,
        time: 10,
        compound: 4
    };

    const badResult = calculateCompoundInterest(
        badExample.principal,
        badExample.rate,
        badExample.time,
        badExample.compound
    );


    // Display results in the HTML
    document.getElementById('result').innerHTML = `
        <h3>Good Example Results:</h3>
        <p>Principal: $${goodExample.principal}</p>
        <p>Rate: ${goodExample.rate * 100}%</p>
        <p>Time: ${goodExample.time} years</p>
        <p>Compounds per Year: ${goodExample.compound}</p>
        <p>Total Amount: $${goodResult.amount}</p>
        <p>Interest Earned: $${goodResult.interest}</p>

        <h3>Bad Example Results:</h3>
        <p>Principal: $${badExample.principal}</p>
        <p>Rate: ${badExample.rate * 100}%</p>
        <p>Time: ${badExample.time} years</p>
        <p>Compounds per Year: ${badExample.compound}</p>
        <p>Total Amount: $${badResult.amount}</p>
        <p>Interest Earned: $${badResult.interest}</p>
    `;
}