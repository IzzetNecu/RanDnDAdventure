import React from "react"
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { getRandomEvent } from '../helper/EventHelper'


const Event = () => {
    const [isEventSet, setIsEventSet] = useState(false);
    const [thisEvent, setThisEvent] = useState(
        <Button variant="contained" color="primary" onClick={getEvent}>
            Get Event
        </Button>);

    function getEvent() {
        const ev = getRandomEvent();
        const event = <div>{ev}</div>
        setThisEvent(event);
        setIsEventSet(true);
    }

    return (
        <div>
            {thisEvent}
        </div>
    )
}

export default Event;