import React from "react"
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { getRandomEvent } from '../helper/EventHelper'
import TextField from '@material-ui/core/TextField';


const Event = () => {
    const [isEventSet, setIsEventSet] = useState(false);
    const [thisEvent, setThisEvent] = useState(
        <Button variant="contained" color="primary" onClick={getEvent}>
            Get Event
        </Button>);

    function getEvent() {
        const ev = getRandomEvent();
        const event = <div>
            <h3>{ev.type}</h3>
            <p className="description">{ev.description}</p>
        </div>
        setThisEvent(event);
        setIsEventSet(true);
    }

    return (
        <div className="event">
            {thisEvent}
            {isEventSet ?
                <div>
                    <TextField
                        label="Notes"
                        multiline
                        rows="4"
                        variant="outlined"
                    />
                </div>
                : <div></div>}

        </div>
    )
}

export default Event;