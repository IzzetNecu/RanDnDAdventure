const events = {
    Basic: {
        Person: ["Merchant"],
        Animal: ["Goat"]
    }
}

const eventsBasic = ["Person", "Hostile Encounter", "Merchant", "Animal"];

//return better event (what kind of person, encounter merchant...), rng description
export function getRandomEvent() {
    const rng = Math.floor(Math.random() * eventsBasic.length);
    return eventsBasic[rng];
}

export function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * (ceiling + 1));
}
