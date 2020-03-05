import React from "react"
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Event from './Event';
import { getRandomLocation } from '../helper/LocationHelper'
import { getRandomNumber } from '../helper/EventHelper'

const Location = (props) => {
    const [isLocationSet, setIsLocationSet] = useState(false);
    const [thisLocation, setThisLocation] = useState(
        <Button variant="contained" color="primary" onClick={getLocation}>
            Next Location
        </Button>);
    const [events, setEvents] = useState([]);

    function getLocation() {
        const loc = getRandomLocation();
        const location = (
            <div>
                <h2>{loc.type}</h2>
                <p>{loc.weather} {loc.surrounding} {loc.animals}</p>
            </div>
        )
        setThisLocation(location);

        let tempEvents = []
        let eventCount = getRandomNumber(3);
        if (eventCount > 0) {
            for (let i = 0; i < eventCount; i++) {
                tempEvents.push(<Event></Event>)
            }

        }
        setEvents(tempEvents);
        setIsLocationSet(true);
    }

    return (
        <div>
            {thisLocation}
            {isLocationSet ?
                <div>
                    <div className="eventList">
                        {events}
                    </div>
                    <Location></Location>
                </div>
                : <div />}
        </div>
    )
}




export default Location;