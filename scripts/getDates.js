const options = {
    year: "numeric"
}

const modified = document.lastModified;
const currentDate = new Date().toLocaleDateString("en-US", options);

document.firstElementChild("p").textContent = `&copy${currentDate}`;
document.querySelector("#lastModified").textContent = "Hello";