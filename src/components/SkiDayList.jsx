import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
import SkiDayRow from './SkiDayRow.jsx'

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
                            resort={day.resort}
                            date={day.date}
                            powder={day.powder}
                            backcountry={day.backcountry}/>
            )}
        </tbody>
    </table>
)

module.exports = SkiDayList;