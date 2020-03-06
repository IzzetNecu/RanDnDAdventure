import React from "react"
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { getRandomPerson } from '../helper/PersonHelper'
import TextField from '@material-ui/core/TextField';


const Person = () => {
    const [isPersonSet, setIsPersonSet] = useState(false);
    const [thisPerson, setThisPerson] = useState(
        <Button variant="contained" color="primary" onClick={getPerson}>
            Get Person
        </Button>);

    function getPerson() {
        const ev = getRandomPerson();
        const person = <div>
            <h3>{ev.type}</h3>
            <p className="description">{ev.description}</p>
        </div>
        setThisPerson(person);
        setIsPersonSet(true);
    }

    return (
        <div className="person">
            {thisPerson}
            {isPersonSet ?
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

export default Person;