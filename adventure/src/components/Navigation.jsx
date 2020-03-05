import React from "react"
import packageJson from '../../package.json';

const Navigation = () => {

    return (
        <div className="navigation">
            <h1>RanDnDventure</h1>
            <p>{packageJson.version}</p>
        </div>
    )
}

export default Navigation;