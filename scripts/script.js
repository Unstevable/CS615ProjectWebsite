// Get all the elements
const helpBtn = document.getElementById('help-btn');
const filterBtn = document.getElementById('filter-btn');
const startExploringBtn = document.getElementById('start-exploring-btn');
const closeHelpPopup = document.getElementById('close-help-popup');
const closeFilterPopup = document.getElementById('close-filter-popup');
const helpPopup = document.getElementById('help-popup');
const filterPopup = document.getElementById('filter-popup');

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

// Placeholder nodes for the timeline
const timelineContainer = document.querySelector('.timeline-container');

const events = [
    { year: "1961", image: "comics/secretwars_2015.jpg"},
    { year: "1963", image: "comics/secretwars_2015.jpg"},
    { year: "1965", image: "comics/secretwars_2015.jpg"},
];

function createTimeline(){
    const timelineContainer = document.querySelector('.timeline-container');

    events.forEach((event, index) => {
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
    });
}

// Call the function to create the timeline when page loads
window.onload = createTimeline;