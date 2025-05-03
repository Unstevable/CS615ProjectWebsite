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
const nodeWidth = 65;

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
        tags: ["Crossover", "Spider-Man", "Avengers", "X-Men", "Fantastic Four", "Hulk", "Magneto", "Doctor Doom", "Ultron", "Kang the Conquerer", "Galactus"]
    },
    {
        title: "Infinity Gauntlet (1991)",
        image: "comics/infinitygauntlet.jpg",
        summary: "Space. Power. Soul. Mind. Reality. Time. With all six infinity stones in his possession, Thanos, the Mad Titan, now omnipotent, snaps away half of the life in the universe in an attempt to impress Mistress Death.  Now, the remaining heroes band together in a final effort to stop him and set things right.",
        tags: ["Crossover", "Thanos", "Adam Warlock", "Avengers", "X-Men", "Doctor Strange", "Silver Surfer", "Thor", "Hulk", "Captain America", "Iron Man", "Spider-Man", "Wolverine", "Scarlet Witch", "Namor", "Mephisto", "Galactus"]
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
        title: "House of M",
        image: "comics/houseofm.jpg",
        summary: "Wanda Maximoff (Scarlet Witch) suffers from a mental break and loses control of her powers, which can alter reality how she pleases.  The Avengers and X-Men try to decide if Wanda must be killed, before her powers run rampant and destroy everyone.  Before they are able, Wanda creates an altered, fake reality world and brings everyone with her, with this new reality called the House of M.  When heroes memories begin to be restored, they go to confront her, where Magneto kills her brother, Quicksilver.  Wanda officially snaps, and declares \"No More Mutants\", where she seemingly \"rewrites\" reality back to what it once was, however now the mutant population is reduced by 90%.",
        tags: ["Crossover", "Scarlet Witch", "Avengers", "X-Men", "Magneto"]
    },
    {
        title: "Civil War",
        image: "comics/civilwar.jpg",
        summary: "After the villain Nitro detonates himself and kills 600 people, including wiping out an entire elementary school, a national crisis develops - leading to the creation of the Superhuman Registration Act, where the government requires those with superhuman abilities to register their identities and work as agents of the government, otherwise they can no longer be superheroes.  This splits up the superhero community between those in favor of the Superhuman Registration Act, led by Iron Man, and those against it, led by Captain America.",
        tags: ["Crossover", "Iron Man", "Captain America", "Spider-Man", "Daredevil", "Avengers"]
    },
    {
        title: "World War Hulk",
        image: "comics/worldwarhulk.jpg",
        summary: "After being forced off Earth by the Illuminati, the Incredible Hulk found himself as a gladiator who led a revolution on the planet Sakaar.  However, when the ship he was exiled on explodes and kills his newly found wife, the Incredible Hulk comes back to Earth for revenge.",
        tags: ["Crossover", "Hulk", "Illuminati", "X-Men", "Sentry", "Inhumans", "Avengers"]
    },
    {
        title: "Secret Invasion",
        image: "comics/secretinvasion.jpg",
        summary: "The Skrulls, a shape-shifting alien race, has infiltrated Earth with hopes of taking control from within.  After \"Elektra\" is killed in battle, her body reverts to that of a Skrull, revealing that it was not the Elektra our heroes knew, and now everyone develops a sense of distrust.  What other heroes have been secretly Skrulls in disguise, how long have they been Skrulls, and how can they be stopped?",
        tags: ["Crossover", "Avengers", "X-Men", "Fantastic Four"]
    },
    {
        title: "Avengers V.S. X-Men",
        image: "comics/avengers_vs_xmen.jpg",
        summary: "After the events of House of M, the Pheonix Force attempts to return to Earth and possess itself within Hope Summers.  The Avengers believe that the Pheonix Force will bring death and destruction, while the X-Men believe it will be the key to restore the Mutant Kind.  This disagreement proves to be near apocalyptic when these groups begin fighting each other globally.",
        tags: ["Crossover", "Avengers", "X-Men", "Namor"]
    },
    {
        title: "New Avengers (2013 - 2015)",
        image: "comics/newavengers.jpg",
        summary: "The multiverse is collapsing.  Incursions, an event where two Earths from separate universes are at risk of crashing into each other, are occurring en masse.  If neither of the Earths is able to destroy the other before collision, then both of those respective universes are destroyed.  This phenomenon has reached our main Earth, 616, and the Illuminati are faced with one of their hardest questions: should we destroy another Earth to save our own?",
        tags: ["Avengers", "Doctor Doom", "Illuminati", "New Avengers", "Namor"],
    },
    {
        title: "Infinity (2013)",
        image: "comics/infinity.jpg",
        summary: "Due to the presence of the Incursion phenomenon, ancient cosmic bringers of life known as the Builders decide that the Earth must be destroyed to preserve this universe.  While most of Earth's heroes are off-world fighting a cosmic war, Thanos decides to attack Earth with the help of his Black Order, in an effort to find and kill his son, Thane, whom he belives is on the planet.",
        tags: ["Crossover", "Thanos", "The Black Order", "Avengers", "New Avengers", "Inhumans", "Black Panther", "Doctor Strange"]
    },
    {
        title: "Spider-Verse (2014)",
        image: "comics/spiderverse.jpg",
        summary: "The Inheritors, a family of powerful, vampiric beings, are traversing the multiverse to hunt down and consume the life forces of all beings connected to the Spider-Totem—individuals across realities who possess spider-like abilities. Their goal: to eradicate every Spider-person in existence. To combat this existential threat, Spider-heroes from various universes band together, forming an unprecedented alliance to fight back and protect the multiverse.",
        tags: ["Spider-Man", "Spider-Man (Miles Morales)", "Spider-Gwen", "Spider-Man 2099"]
    },
    {
        title: "Secret Wars (2015)",
        image: "comics/secretwars_2015.jpg",
        summary: "After the final incursion between Earth 616 and 1610, the multiverse seems to be on the verge of total collapse.  However, a now god-like Doctor Doom, with the power of the Beyonders, create a new world that exists on its own amongst the destroyed multiverse: Battleworld, where he rules as Emperor.  All surviving heroes live their lives on Battleworld, with no memory of the previous multiverse-but when certain heroes are awoken with the memory of what happened, they must figure out how to stop Doom and restore the multiverse.",
        tags: ["Crossover", "Doctor Doom", "Fantastic Four", "Spider-Man (Miles Morales)", "Thanos", "The Maker", "Black Panther", "Doctor Strange", "Molecule Man"]
    },
    {
        title: "Civil War II (2016)",
        image: "comics/civilwartwo.jpg",
        summary: "The Marvel Universe is torn apart when a new Inhuman, Ulysses, emerges with the ability to predict future events with high accuracy. His visions include disasters, attacks, and crimes yet to be committed.  This leads to another split among heroes: one faction led by Iron Man, who believes in people having free will and the ability to control themselves and not fufill Ulysses's visions, and the other faction, led by Captain Marvel, who believes in detaining the people in Ulysses's visions to prevent the tragedies from happening.",
        tags: ["Crossover", "Iron Man", "Captain Marvel", "Spider-Man (Miles Morales)", "Avengers"]
    },
    {
        title: "Secret Empire (2017)",
        image: "comics/secretempire.jpg",
        summary: "Steve Rogers (Captain America) has secretly been reprogrammed by the Red Skull and the sentient Cosmic Cube named Kobik to believe he has been a lifelong agent of Hydra.  Using his intelligence, leadership, and the trust of the superhero community, Hydra-Cap orchestrates a takeover of the United States, becoming the Supreme Leader of Hydra and plunging the Marvel Universe into its darkest timeline.",
        tags: ["Crossover", "Captain America", "Captain America (Sam Wilson)", "Spider-Man (Miles Morales)", "Iron Man", "Avengers"]
    },
    {
        title: "Devil's Reign",
        image: "comics/devilsreign.jpg",
        summary: "As the Mayor of New York City, Wilson Fisk passes sweeping legislation that outlaws all superhero activity within the city. Using his political power and a super-powered police force, Fisk launches a full-blown crusade to arrest and unmask heroes, blaming them for chaos and corruption in the city.",
        tags: ["Crossover", "Kingpin", "Daredevil", "Captain America", "Spider-Man", "Moon Knight", "Iron Man"]
    },
    {
        title: "Avengers V.S. X-Men V.S. Eternals: Judgement Day",
        image: "comics/judgementday.jpg",
        summary: "The Eternals have discovered a disturbing truth: mutants, through resurrection on Krakoa, now defy death—a concept the Eternals were programmed to eliminate in “excess deviation.”  Led by Druig, the new Eternal Prime, the Eternals declare war on mutantkind, labeling the X-Men as Deviants and launching an attack on Krakoa and Arakko.  In response, the Avengers, Eternals, and X-Men are pulled into a conflict that spirals into cosmic judgment—when a Celestial god is resurrected to serve as the judge of humanity itself.",
        tags: ["Crossover", "Avengers", "X-Men", "Eternals"]
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