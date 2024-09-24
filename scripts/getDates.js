// Replace the current year.
const options = {
    year: "numeric"
};

const footer = document.querySelector('p');
let footerText = footer.textContent;
const currentDate = new Date().toLocaleDateString("en-US", options);
let newFooter = footerText.replace('CurrentYear', currentDate)
footer.textContent = newFooter;

// Insert last modification information
const modified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${modified}`;