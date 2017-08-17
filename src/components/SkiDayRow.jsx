import Terrain from 'react-icons/lib/md/terrain.js';
import SnowFlake from 'react-icons/lib/ti/weather-snow.js';
import Calendar from 'react-icons/lib/fa/calendar.js';
import React from 'react';

const SkiDayRow = (props) => {
    
    return (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <SnowFlake /> : null}
        </td>
        <td>
            {(backcountry) ? <Terrain /> : null}
        </td>
    </tr>
);
}

SkiDayRow.propTypes = {
	resort: React.PropTypes.string.isRequired,
	date: React.PropTypes.instanceOf(Date).isRequired,
	powder: React.PropTypes.bool,
	backcountry: React.PropTypes.bool
}

module.exports = SkiDayRow;