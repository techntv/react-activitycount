import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
import SkiDayRow from './SkiDayRow.jsx'
import React from 'react';

const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody> 
            {days.map((day, i) => 
                <SkiDayRow key={i} 
                            {...day}/>
            )}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: React.PropTypes.array
}
module.exports = SkiDayList;
