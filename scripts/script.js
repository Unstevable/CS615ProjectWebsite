// Get all the elements
const helpBtn = document.getElementById('help-btn');
const filterBtn = document.getElementById('filter-btn');
const startExploringBtn = document.getElementById('start-exploring-btn');
const closeHelpPopup = document.getElementById('close-help-popup');
const closeFilterPopup = document.getElementById('close-filter-popup');
const helpPopup = document.getElementById('help-popup');
const filterPopup = document.getElementById('filter-popup');
const applyFiltersBtn = document.getElementById('apply-filters-btn');
const removeFiltersBtn = document.getElementById('remove-filters-btn');
const timelineContainer = document.querySelector('.timeline-container');

// Show the pop-up windows
helpBtn.addEventListener('click', () => {
    helpPopup.style.display = 'block';
});

filterBtn.addEventListener('click', () => {
    filterPopup.style.display = 'block';

    const filterOptions = document.querySelectorAll('.filter-option');

    filterOptions.forEach(option => {
        option.checked = false;
    });
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
    removeFiltersBtn.style.display = 'block';
});

removeFiltersBtn.addEventListener('click', () => {
    const timelineNodes = Array.from(timelineContainer.querySelectorAll('.timeline-node'));

    timelineNodes.forEach(node => {
        node.style.display = 'block';
    });
    removeFiltersBtn.style.display = 'none';
});

// Placeholder nodes for the timeline
const timelineLine = document.querySelector('.timeline-line'); // the actual timeline
let totalWidth = window.innerWidth;
const nodeWidth = 150;

const eventsData = [
    {
        title: "Fantastic Four #1 (1961)",
        image: "comics/FF1_1961.jpg",
        summary: "The first appearance of the Fantastic Four!  Detailing how Marvel's first family acquired their abilities, the Fantastic Four face off against their first and classic villain after a series of monster attacks throughout the world: Mole Man.",
        tags: ["Fantastic Four"]

    },
    {
        title: "Amazing Fantasy #15 (1962)",
        image: "comics/amazingfantasy15.jpg",
        summary: "The first appearance of one of the most popular super heroes ever: Spider-Man! After getting bitten by a radioactive spider, Peter Parker finds himself with unusual super abilities. Unfortunately, with the death of Uncle Ben, Peter learns that with great power comes great responsibility.",
        tags: ["Spider-Man"]
    },
    {
        title: "X-Men #1 (1963)",
        image: "comics/xmendebut.jpg",
        summary: "The first appearance of one of the most iconic groups in Marvel Comics: the X-Men!  The original X-Men (Cyclops, Jean Grey (Marvel Girl), Beast, Angel, Iceman) led by Professor Charles Xavier face against their first, and longest ongoing villain, Magneto.",
        tags: ["X-Men", "Magneto"]
    },
    {
        title: "The Avengers #1 (1963)",
        image: "comics/avengersdebut.jpg",
        summary: "The first appearance of the group everyone knows and loves: The Avengers! This group, originally comprised of Iron Man, Thor, The Hulk, Ant Man and the Wasp, take on Loki after he uses his magic in an attempt to influence events that are happening on Earth.",
        tags: ["Avengers", "Loki"]
    },
    {
        title: "The Pheonix Saga",
        image: "comics/xmen101.jpg",
        summary: "While returning to Earth after a battle in space, the spaceship the X-Men are traveling on is damaged.  While approaching a solar flare, Jean Grey \"sacrifices\" herself to pilot the ship to ensure the rest of the X-Men get home safe.  When the ship crashes into the water on Earth, Jean Grey emerges from the water - but now as The Phenoix.  What type of new powers does she possess?",
        tags: ["X-Men"]
    },
    {
        title: "The Dark Pheonix Saga",
        image: "comics/darkpheonix.jpg",
        summary: "Jean Grey, with the power of the Pheonix within her, becomes manipulated by the Hellfire Club, which results in her losing her grip on reality, turning her into something more sinister: the Dark Pheonix.  Will the X-Men be able to protect innocent lives, even if it means having to face one of their beloved friends?",
        tags: ["X-Men"]
    },
    {
        title: "Secret Wars (1984)",
        image: "comics/secretwars_1984.jpg",
        summary: "The Beyonder, a being from beyond the Multiverse, intrigued with the concepts of good and evil, teleport a group of Earth's heroes and villains to a location known as Battleworld to pit them against one another.",
        tags: ["Crossover", "Spider-Man", "Avengers", "X-Men", "Fantastic Four", "Hulk", "Magneto", "Doctor Doom", "Ultron", "Kang the Conquerer", "Molecule Man", "Galactus"]
    },
    {
        title: "Infinity Gauntlet (1991)",
        image: "comics/infinitygauntlet.jpg",
        summary: "Space. Power. Soul. Mind. Reality. Time. With all six infinity stones in his possession, Thanos, the Mad Titan, now omnipotent, snaps away half of the life in the universe in an attempt to impress Mistress Death.  Now, the remaining heroes band together in a final effort to stop him and set things right.",
        tags: ["Crossover", "Thanos", "Adam Warlock", "Avengers", "X-Men", "Doctor Strange", "Silver Surfer", "Thor", "Hulk", "Captain America", "Iron Man", "Spider-Man", "Wolverine", "Cyclops", "Scarlet Witch", "Namor", "Mephisto"]
    },
    {
        title: "Infinity War (1992)",
        image: "comics/infinitywar.jpg",
        summary: "Adam Warlock is left with the possession of the infinity gauntlet.  He purges himself of both good and evil, hoping to maintain an identity of only logic - however, this inadvertently led to the rebirth of his evil counterpart: the Magus.  Now, Magus has acquired five of the six infinity stones - can the heroes stop Magus from becoming an even worse threat than Thanos?",
        tags: ["Crossover", "Adam Warlock", "Thanos", "Galactus", "Doctor Strange", "Avengers", "X-Men", "Spider-Man", "Silver Surfer"]
    },
    {
        title: "The Onslaught Saga",
        image: "comics/onslaught.jpg",
        summary: "After attempting to wipe the mind of Magneto, Charles Xavier accidentally created one of the X-Men's worst threats: Onslaught, the manifestation of the combined minds and powers of Magneto and Professor X.  Now with a plan to rule Earth, Onslaught faces off against Earth's heroes in one of their biggest threats yet.",
        tags: ["Crossover", "X-Men", "Onslaught", "Avengers"]
    },
    {
        title: "World War Hulk",
        image: "comics/worldwarhulk.jpg",
        summary: "After being forced off Earth by the Illuminati, the Incredible Hulk found himself as a gladiator who led a revolution on the planet Sakaar.  However, when the ship he was exiled on explodes and kills his newly found wife, the Incredible Hulk comes back to Earth for revenge.",
        tags: ["Crossover", "Hulk", "Illuminati", "X-Men", "Sentry", "Inhumans", "Avengers"]
    },
    {
        title: "Avengers V.S. X-Men",
        image: "comics/avengers_vs_xmen.jpg",
        summary: "After the events of House of M, the Pheonix Force attempts to return to Earth and possess itself within Hope Summers.  The Avengers believe that the Pheonix Force will bring death and destruction, while the X-Men believe it will be the key to restore the Mutant Kind.  This disagreement proves to be near apocalyptic when these groups begin fighting each other globally.",
        tags: ["Crossover", "Avengers", "X-Men"]
    },
    {
        title: "Secret Wars (2015)",
        image: "comics/secretwars_2015.jpg",
        summary: "After the final incursion between Earth 616 and 1610, the multiverse seems to be on the verge of total collapse.  However, a now god-like Doctor Doom, with the power of the Beyonders, create a new world that exists on its own amongst the destroyed multiverse: Battleworld, where he rules as Emperor.  All surviving heroes live their lives on Battleworld, with no memory of the previous multiverse-but when certain heroes are awoken with the memory of what happened, they must figure out how to stop Doom and restore the multiverse.",
        tags: ["Crossover", "Doctor Doom", "Fantastic Four", "Spider-Man (Miles Morales)", "Thanos", "The Maker", "Black Panther",]
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
    document.getElementById('popup-summary').textContent = `Summary: ${event.summary}`;
    document.getElementById('popup-tags').textContent = `Characters: ${event.tags.join(', ')}`;

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