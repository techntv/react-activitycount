import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
import SkiDayRow from './SkiDayRow.jsx'
import React from 'react';
import { Link } from 'react-router-dom';

const SkiDayList = ({days}) => {
    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? days : days.filter(day => day[filter])
    return (
    <div className="ski-day-list">      
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="list-days">All Days</Link>
                    <Link to="/list-days/powder">Powder Days</Link>
                    <Link to="/list-days/backcountry">Backcountry Days</Link>
                </td>
            </tr>
        </thead>
        <tbody> 
            {filteredDays.map((day, i) => 
                <SkiDayRow key={i} 
                            {...day}/>
            )}
        </tbody>
    </table>
    </div>  
    )
}

SkiDayList.propTypes = {
    days: React.PropTypes.array
}
module.exports = SkiDayList;
