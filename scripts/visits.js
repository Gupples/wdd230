// Select the visits display
const visitsDisplay = document.querySelector('#visits');

// Get the number of visits
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// If the site has been visited...
if (numVisits !== 0) {
    // ...display the visits...
    visitsDisplay.textContent = numVisits;

// ...otherwise, welcome them to the site.
} else {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// The site has been visited (again)
numVisits++;

// Store the new number of visits in localStorage.
localStorage.setItem("numVisits-ls", numVisits);