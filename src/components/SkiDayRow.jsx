import Terrain from 'react-icons/lib/md/terrain.js';
import SnowFlake from 'react-icons/lib/ti/weather-snow.js';
import Calendar from 'react-icons/lib/fa/calendar.js';

const SkiDayRow = ({resort,date,powder,backcountry}) => (
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

module.exports = SkiDayRow;