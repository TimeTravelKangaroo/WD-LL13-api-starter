/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Function to fetch a random fox image and display it
function fetchFox() {
    // Fetch data from the API
    fetch('https://randomfox.ca/floof/')
        .then(function(response) {
            if (!response.ok) {
                // If response is not ok, throw an error
                throw new Error('Could not fetch data');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(function(data) {
            // Select the output element
            const outputDiv = document.querySelector('#output');
            // Clear any previous content
            outputDiv.innerHTML = '';
            // Create an image element
            const foxImg = document.createElement('img');
            foxImg.src = data.image;
            foxImg.alt = 'Random fox';
            foxImg.style.maxWidth = '300px'; // Limit image size for user-friendliness
            // Add the image to the output div
            outputDiv.appendChild(foxImg);
            // Optionally, display the link to the image
            const imgLink = document.createElement('p');
            imgLink.textContent = 'Image source: ' + data.link;
            outputDiv.appendChild(imgLink);
        })
        .catch(function(error) {
            // Handle errors and display a message
            const outputDiv = document.querySelector('#output');
            outputDiv.textContent = 'Error: ' + error.message;
        });
}

// Add event listener to the button to fetch a fox image when clicked
document.addEventListener('DOMContentLoaded', function() {
    const fetchBtn = document.querySelector('#fetch-fox-btn');
    if (fetchBtn) {
        fetchBtn.addEventListener('click', fetchFox);
    }
});

// Example placeholder:
console.log("Team activity starter code loaded.");