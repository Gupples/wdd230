// Select the visited display
const visitsDisplay = document.querySelector('#last-visited');
const msToDays = 86400000;
let today = Date.now();

// Get the last date site was visited
let lastVisit = Number(window.localStorage.getItem("lastVisitDate")) || today;
let daysSinceLastVisit = Math.round((today / msToDays)-(lastVisit / msToDays));

// If the site has been visited...
if (lastVisit == today) {
    // ...display the visits...

    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
    
    // ...otherwise, welcome them to the site.
} else if (daysSinceLastVisit == 0) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
} else {
    visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit == 1 ? "day" : "days"} ago.`;
}

lastVisit = today;

// Store the new number of visits in localStorage.
localStorage.setItem("lastVisitDate", lastVisit); 