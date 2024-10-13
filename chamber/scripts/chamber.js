// BUTTONS
// Hamburgur Button
const hamButton = document.querySelector('#menuButton');
const spacer = document.querySelector('#spacer');
const navLinks = document.querySelector('#navLinks');

hamButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    if (navLinks.classList.contains('open'))
        {
            spacer.classList.remove('open');
        } else {
            spacer.classList.add('open')
        };
        
        
    });

// Dark Mode Button
const main = document.querySelector('main');
const darkButton = document.querySelector('#darkModeButton')
darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
    darkButton.classList.toggle('dark');
});

// DATES
// Replace the current year.
const options = {
    year: "numeric"
}

const footer = document.querySelector('#copyright');
let footerText = footer.innerHTML;
const currentDate = new Date().toLocaleDateString("en-US", options);
let newFooter = footerText.replace('CurrentYear', currentDate)
footer.innerHTML = newFooter;

// Insert last modification information
const modified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${modified}`;