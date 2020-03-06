import { eventTypes, eventData } from './EventData';

//return better event (what kind of person, encounter merchant...), rng description
export function getRandomEvent() {
    let event = {};
    event.type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    event.description = getRandomEventDescription(event.type);
    return event;
}

export function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * (ceiling + 1));
}

function getRandomEventDescription(eventType) {
    const event = eventData[eventType];
    let description = "You see a ";
    const personality = event.Personalities[Math.floor(Math.random() * event.Personalities.length)] +
        ", " + event.Personalities[Math.floor(Math.random() * event.Personalities.length)];
    const body = ", " + event.Body[Math.floor(Math.random() * event.Body.length)]
    const age = ", " + event.Age[Math.floor(Math.random() * event.Age.length)]
    const height = " and " + event.Height[Math.floor(Math.random() * event.Height.length)]
    const race = " " + event.Race[Math.floor(Math.random() * event.Race.length)]

    description = description + personality + body + age + height + race;
    return description;
}