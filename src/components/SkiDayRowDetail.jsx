import React from 'react';
import Terrain from 'react-icons/lib/md/terrain.js';
import SnowFlake from 'react-icons/lib/ti/weather-snow.js';
import Calendar from 'react-icons/lib/fa/calendar.js';

const SkiDayRowDetail = (props) => {
    
    return (
     <tr>
        <td>
            {props.date}
        </td>
        <td>
            {props.resort}
        </td>
        <td>
            {(props.powder) ? <SnowFlake /> : null}
        </td>
        <td>
            {(props.backcountry) ? <Terrain /> : null}
        </td>
    </tr>
)};

module.exports = SkiDayRowDetail;