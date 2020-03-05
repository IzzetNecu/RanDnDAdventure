const locations = {
    Basic: {
        Mountain: ["Volcano"],
        Sea: ["Beach"],
        Swamp: ["Hut"],
        Forest: ["Glade"],
        Tundra: ["Igloo"],
        Desert: ["Dune", "Oasis"],
        Plains: ["Hill"]
    }
}

const locationsBasic = ["Mountain", "Beach", "Swamp", "Forest", "Tundra", "Desert", "Plains"];

export function getRandomLocation() {
    const rng = Math.floor(Math.random() * locationsBasic.length);
    return locationsBasic[rng];
}