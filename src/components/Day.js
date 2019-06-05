import React from 'react';


const Day = (props) =>
    <div>
        <h3>Max: {props.temperatureHigh}°C</h3>
        <h3>Min: {props.temperatureLow}°C</h3>
        <p>Summary: {props.summary}</p>
    </div>

export default Day