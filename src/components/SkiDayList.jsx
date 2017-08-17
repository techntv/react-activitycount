import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
import SkiDayRow from './SkiDayRow.jsx'
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const SkiDayList = (props) => {
    let powderDay = props.days.filter((day) => day.powder == true);
    let backcountryDay = props.days.filter((day) => day.backcountry == true);
    console.log(powderDay);
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
                     <NavLink to={`${props.match.url}`}>All Days</NavLink>
                    <NavLink to={`${props.match.url}/powder`}>Powder Days</NavLink>
                    <NavLink to={`${props.match.url}/backcountry`}>Backcountry Days</NavLink> 
                </td>
            </tr>
        </thead>
        
            <Route exact path={props.match.path} render={() => <SkiDayRow data={props.days}/>}/>
            <Route path={`${props.match.path}/powder`} render={() => <SkiDayRow data={powderDay}/>}/>
            <Route path={`${props.match.path}/backcountry`} render={() => <SkiDayRow data={backcountryDay}/>}/>  
        
    </table>  

    
    </div>  
    )
}

SkiDayList.propTypes = {
    days: React.PropTypes.array
}
module.exports = SkiDayList;
