// Get all the elements
const helpBtn = document.getElementById('help-btn');
const filterBtn = document.getElementById('filter-btn');
const startExploringBtn = document.getElementById('start-exploring-btn');
const closeHelpPopup = document.getElementById('close-help-popup');
const closeFilterPopup = document.getElementById('close-filter-popup');
const helpPopup = document.getElementById('help-popup');
const filterPopup = document.getElementById('filter-popup');
const applyFiltersBtn = document.getElementById('apply-filters-btn');
const timelineContainer = document.querySelector('.timeline-container');

// Show the pop-up windows
helpBtn.addEventListener('click', () => {
    helpPopup.style.display = 'block';
});

filterBtn.addEventListener('click', () => {
    filterPopup.style.display = 'block';
});

// Close the windows

closeHelpPopup.addEventListener('click', () => {
    helpPopup.style.display = 'none';
});

closeFilterPopup.addEventListener('click', () => {
    filterPopup.style.display = 'none';
});

applyFiltersBtn.addEventListener('click', () => {
    const selectedFilters = Array.from(document.querySelectorAll('.filter-option:checked')).map(checkbox => checkbox.value);

    const timelineNodes = Array.from(timelineContainer.querySelectorAll('.timeline-node'));

    timelineNodes.forEach((node, index) => {
        const eventTags = eventsData[index].tags;

        const isMatch = selectedFilters.some(filter => eventTags.includes(filter));



        if (isMatch) {
            node.style.display = 'block';
        } else {
            node.style.display = 'none';
        }
    });

    filterPopup.style.display = 'none';
});

// Placeholder nodes for the timeline
const timelineLine = document.querySelector('.timeline-line'); // the actual timeline
let totalWidth = window.innerWidth;
const nodeWidth = 150;

const eventsData = [
    {
        title: "Secret Wars (1984)",
        image: "comics/secretwars_1984.jpg",
        summary: "The Beyonder pits the greatest heroes against their greatest foes.",
        tags: ["Avengers", "Galactus", "Beyonder"]
    },
    {
        title: "Infinity Gauntlet (1991)",
        image: "comics/infinitygauntlet.jpg",
        summary: "With all six infinity stones in his gauntlet, Thanos snaps half of all life away.",
        tags: ["Thanos", "Crossover"]
    },
    {
        title: "The Onslaught Saga",
        image: "comics/onslaught.jpg",
        summary: "After attempting to wipe the mind of Magneto, Charles Xavier accidentally created one of the X-Men's worst threats: Onslaught, the manifestation of the combined minds and powers of Magneto and Professor X.",
        tags: ["Onslaught", "Crossover", "X-Men"]
    },
    {
        title: "World War Hulk",
        image: "comics/worldwarhulk.jpg",
        summary: "After being forced off Earth by the Illuminati, the Incredible Hulk found himself as a gladiator who led a revolution on the planet Sakaar.  However, when the ship he was exiled on explodes and kills his newly found wife, the Incredible Hulk comes back to Earth for revenge.",
        tags: ["Hulk", "Crossover", "Illuminati"]
    },
    {
        title: "Avengers V.S. X-Men",
        image: "comics/avengers_vs_xmen.jpg",
        summary: "Avengers v.s. X-men",
        tags: ["Avengers", "X-Men", "Crossover"]
    },
    {
        title: "Secret Wars (2015)",
        image: "comics/secretwars_2015.jpg",
        summary: "After the final incursion between Earth 616 and 1610....",
        tags: ["Doctor Doom", "Mr. Fantastic", "Crossover"]
    }
];

function createTimeline(){
    eventsData.forEach((event, index) => {
        // Create the node for an event
        const node = document.createElement('div');
        node.classList.add('timeline-node');

        // Create inner white circle
        const innerCircle = document.createElement('div');
        innerCircle.classList.add('inner-circle');

        // Create a vertical line for the node
        const verticalLine = document.createElement('div');
        verticalLine.classList.add(index % 2 === 0 ? 'vertical-line-up' : 'vertical-line-down');

        // Add the comic cover
        const image = document.createElement('img');
        image.src = event.image;
        image.alt = "Comic cover";
        image.classList.add(index % 2 === 0 ? 'comic-cover-up' : 'comic-cover-down');

        // Append inner white circle
        node.appendChild(innerCircle);

        // Append image to node
        node.appendChild(image);

        // Add the vertical line
        node.appendChild(verticalLine);

        // Append the node to the timeline
        timelineContainer.appendChild(node);

        // Event listener for the popup
        node.addEventListener('click', () => openPopup(index));
        if (index >= 10){
            totalWidth += nodeWidth;
        }
    });
    timelineLine.style.width = `${totalWidth}px`;
}

function showHelpPopup() {
    helpPopup.style.display = 'block'; // Display the help pop-up
}

// Display the help pop-up when loading the page for the first time
window.onload = () => {
    createTimeline(); // and create the timeline
    showHelpPopup();
}

// const nodes = document.querySelectorAll('.timeline-node');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');

function openPopup(eventIndex){
    const event = eventsData[eventIndex];
    document.getElementById('popup-title').textContent = event.title;
    document.getElementById('popup-summary').textContent = event.summary;
    document.getElementById('popup-tags').textContent = `Tags: ${event.tags.join(', ')}`;

    popup.style.display = 'block';
}

closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

startExploringBtn.addEventListener('click', () => {
    // get all the nodes
    const nodes = document.querySelectorAll('.timeline-node');

    // Choose one at random
    const randomIndex = Math.floor(Math.random() * nodes.length);

    // activate popup
    openPopup(randomIndex);
});