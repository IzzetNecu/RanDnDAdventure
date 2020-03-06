export const personTypes = ["Person", "Hostile Encounter", "Merchant"];
const personalities = ["talkative", "kind", "friendly", "charming", "angry", "sad", "happy", "twitchy"];
const bodyType = ["attractive", "ugly", "strong", "wimpy"];
const age = ["old", "young", "realy old"];
const height = ["small", "big", "tall"]
const races = ["Elf", "Dwarf", "Human", "Gnome"];
const gender = ["female", "male"];
const selling = ["Jewelry", "Weapons", "Food", "Armor", "Traveling equipment", "Wierd stuff"]

export const personData = {
    Person: {
        Personalities: personalities,
        Body: bodyType,
        Age: age,
        Height: height,
        Race: races,
        Gender: gender
    },
    "Hostile Encounter": {
    },
    Merchant: {
        Selling: selling
    },
};