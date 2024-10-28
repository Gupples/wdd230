const gridButton = document.querySelector('#gridButton');
const listButton = document.querySelector('#listButton');
const display = document.querySelector('#displayField');
const membersURL = "https://gupples.github.io/wdd230/chamber/data/members.json"


// Configure display methods
gridButton.addEventListener("click", () => {
    if (display.classList.contains("list")) {
        toggleClass();
    }
});

listButton.addEventListener("click", () => {
    if (display.classList.contains("grid")) {
        toggleClass();
    }
});

function toggleClass() {
    display.classList.toggle("grid");
    display.classList.toggle("list");
}

// Build the business cards
async function getMembers() {
    // Fetch the data
    const response = await fetch(membersURL);
    // convert to .json()
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

function displayMembers(members) {
    // clear the main data
    display.innerHTML = "";

    members.forEach(member => {
        // Create a card for each member.
        let card = document.createElement('section');
        let icon = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let membership = document.createElement('p');
        let url = document.createElement('a');
        let other = document.createElement('p');

        // Set all the values of the card attributes
        icon.setAttribute('src', member.pic);
        icon.setAttribute('alt', `${member.name} logo`);
        icon.setAttribute('title', `${member.name}`);
        icon.setAttribute('loading', `lazy`);
        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phone.innerHTML = member.phone;
        membership.innerHTML = `Membership: ${member.membership}`;
        url.setAttribute('href', member.url);
        url.innerHTML = member.url;
        other.innerHTML = `*other for "${member.name}"`;


        // Assemble the cards
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(url);
        card.appendChild(other);

        // Add the card to the list of cards.
        display.appendChild(card);

    });
}

getMembers();