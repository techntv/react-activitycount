import Terrain from 'react-icons/lib/md/terrain.js';
import SnowFlake from 'react-icons/lib/ti/weather-snow.js';
import Calendar from 'react-icons/lib/fa/calendar.js';
import React from 'react';
import SkiDayRowDetail from './SkiDayRowDetail.jsx';

const SkiDayRow = (props) => {  
   
    return (
        <tbody>
            {props.data.map((day, i) => 
                <SkiDayRowDetail key={i} 
                           date={day.date}
                           resort={day.resort}
                           powder={day.powder}
                            backcountry={day.backcountry}/>
            )}
        </tbody>
    );
}

SkiDayRow.propTypes = {
	resort: React.PropTypes.string,
	date: React.PropTypes.instanceOf(Date),
	powder: React.PropTypes.bool,
	backcountry: React.PropTypes.bool
}

module.exports = SkiDayRow;