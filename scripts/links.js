const baseURL = "https://gupples.github.io/wdd230/";
const linksURL = "https://gupples.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {
    // Fetch the data
    const response = await fetch(linksURL);
    // Convert to .json()
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    // Clear previous content
    activities.innerHTML = "";
    
    weeks.forEach(week => {
        // Create an <li> for each week
        let item = document.createElement('li');
        item.innerHTML = `${week.week}: `; // Start with week title

        week.links.forEach(activity => {
            // Each link needs a label
            let title = activity.title;
            // Initialize link
            let link = activity.url.startsWith("week") ? baseURL + activity.url : activity.url;
            
            // Assemble the link
            let linkItem = document.createElement('a');
            linkItem.setAttribute('href', link);
            linkItem.innerHTML = `${title}`;

            // Add a separator if necessary
            if (item.innerHTML !== `${week.week}: `) {
                item.innerHTML += " | ";
            }

            // Append linkItem to the current <li>
            item.appendChild(linkItem);
        });

        // Add the <li> to the <ul>
        activities.appendChild(item);
    });
}


getLinks();