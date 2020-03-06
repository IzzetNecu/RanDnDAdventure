import { personTypes, personData } from './PersonData';

//return better Person (what kind of person, encounter merchant...), rng description
export function getRandomPerson() {
    let person = {};
    person.type = personTypes[Math.floor(Math.random() * personTypes.length)];
    person.description = getRandomPersonDescription(person.type);
    return person;
}

export function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * (ceiling + 1));
}

function getRandomPersonDescription(personType) {
    const person = personData.Person;
    let description = "You see a ";
    const personality = person.Personalities[Math.floor(Math.random() * person.Personalities.length)] +
        ", " + person.Personalities[Math.floor(Math.random() * person.Personalities.length)];
    const body = ", " + person.Body[Math.floor(Math.random() * person.Body.length)]
    const age = ", " + person.Age[Math.floor(Math.random() * person.Age.length)]
    const height = " and " + person.Height[Math.floor(Math.random() * person.Height.length)]
    const gender = " " + person.Gender[Math.floor(Math.random() * person.Gender.length)]
    const race = " " + person.Race[Math.floor(Math.random() * person.Race.length)]

    description = description + personality + body + age + height + gender + race;
    return description;
}