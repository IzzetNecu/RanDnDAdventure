import { locationTypes, locationStats, weather } from './LocationData';

export function getRandomLocation() {
    let location = {};
    location.type = locationTypes[Math.floor(Math.random() * locationTypes.length)]
    location.weather = getWeather(location.type);
    location.surrounding = getSurrounding(location.type);
    location.animals = getAnimals(location.type);
    return location;
}

function getWeather(locationType) {
    let weatherChances = locationStats[locationType].WeatherChances;
    const rng = Math.random();
    for (let i = 0; i < weatherChances.length; i++) {
        if (weatherChances[i] > rng) {
            return weather[i];
        }

    }

    return "There is no weather.";
}

function getSurrounding(locationType) {
    const locTypes = locationStats[locationType];
    return locTypes.Surroundings[Math.floor(Math.random() * locTypes.Surroundings.length)];
}

function getAnimals(locationType) {
    const locTypes = locationStats[locationType];
    return locTypes.Animals[Math.floor(Math.random() * locTypes.Animals.length)];
}


