export const locationTypes = ["Mountain", "Beach", "Swamp", "Forest", "Tundra", "Desert", "Plains"];
export const weather = ["It's raining.", "The sun is shining.", "There is a heavy fog.", "It's snowing."]
export const locationStats = {
    Mountain: {
        WeatherChances: [0.4, 0.6, 0.7, 1],
        Surroundings: ["There is tree."],
        Animals: ["A goat skips around the boulders.", "An eagle waits for it's pray."],
        SpecialEvents: ["Mountain special Event"],

    },
    Beach: {
        WeatherChances: [0.1, 0.9, 0.95, 1],
        Surroundings: ["There is palmtree."],
        Animals: ["A doplhin jumps out of the water, wow.", "A turtle sits at the beach."],
        SpecialEvents: ["Beach special Event"],
    },
    Swamp: {
        WeatherChances: [0.5, 0.75, 1, 1.1],
        Surroundings: ["There is swampy tree."],
        Animals: ["A Raven flies away.", "Something moves in the swamp."],
        SpecialEvents: ["Swamp special Event"],
    },
    Forest: {
        WeatherChances: [0.3, 0.6, 0.7, 1],
        Surroundings: ["There is Tree."],
        Animals: ["A singing bird is happily chirping.", "An owl hoot hoots on a tall tree."],
        SpecialEvents: ["Forest special Event"],
    },
    Tundra: {
        WeatherChances: [0.1, 0.2, 0.6, 1],
        Surroundings: ["There is white tree."],
        Animals: ["You hear a wolf howling in the distance."],
        SpecialEvents: ["Tundra special Event"],
    },
    Desert: {
        WeatherChances: [0, 0.8, 0.95, 1],
        Surroundings: ["There is no trees."],
        Animals: ["A camel sits ownerless in the sand.", "You see a dung beetle rolling a ball up a dune."],
        SpecialEvents: ["Desert special Event"],
    },
    Plains: {
        WeatherChances: [0.3, 0.6, 0.7, 1],
        Surroundings: ["There is Tree."],
        Animals: ["A bison family is resting near a lake.", "You see a giraf family sitting in the shadow of a big tree."],
        SpecialEvents: ["Plains special Event"],
    },
} 