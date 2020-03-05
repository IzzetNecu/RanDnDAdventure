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

//return better location, with rng description
export function getRandomLocation() {
    const rng = Math.floor(Math.random() * locationsBasic.length);
    return locationsBasic[rng];
}