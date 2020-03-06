import React from "react"
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Person from './Person';
import { getRandomLocation } from '../helper/LocationHelper'
import { getRandomNumber } from '../helper/PersonHelper'

const Location = (props) => {
    const [isLocationSet, setIsLocationSet] = useState(false);
    const [thisLocation, setThisLocation] = useState(
        <Button variant="contained" color="primary" onClick={getLocation}>
            Next Location
        </Button>);
    const [persons, setPersons] = useState([]);

    function getLocation() {
        const loc = getRandomLocation();
        const location = (
            <div>
                <h2>{loc.type}</h2>
                <p>{loc.weather} {loc.surrounding} {loc.animals}</p>
            </div>
        )
        setThisLocation(location);

        let tempPersons = []
        let personCount = getRandomNumber(3);
        if (personCount > 0) {
            for (let i = 0; i < personCount; i++) {
                tempPersons.push(<Person></Person>)
            }

        }
        setPersons(tempPersons);
        setIsLocationSet(true);
    }

    return (
        <div>
            {thisLocation}
            {isLocationSet ?
                <div>
                    <div className="personList">
                        {persons}
                    </div>
                    <Location></Location>
                </div>
                : <div />}
        </div>
    )
}




export default Location;