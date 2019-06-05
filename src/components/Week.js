import React, { Component } from 'react';
import data from '../data';
import Day from './Day.js'

export default class Week extends Component {

    state = {
        data: data.daily
    }

createDayCards = () =>
        this.state.data.data.map(({ summary, temperatureHigh, temperatureLow, icon }) => ({ summary, temperatureHigh, temperatureLow, icon }))

    render = () => {
        const daysData = this.createDayCards()
        
        
        return daysData.map(day => {
            return (
                <div className="day-card">
                < Day summary={day.summary} temperatureHigh={day.temperatureHigh} temperatureLow={day.temperatureLow} icon={day.icon}/>
                </div>
            )
        });
        
    }
    
}