import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
import SkiDayRow from './SkiDayRow.jsx'
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const SkiDayList = ({match}) => {
    // const nameFilter = match.params.filter;
    // const filteredDays = (!nameFilter || !nameFilter.match(/powder|backcountry/)) ? days : days.filter(day => day[nameFilter]);
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
                    <NavLink to={`${match}`}>All Days</NavLink>
                    <NavLink to={`${match}/powder`}>Powder Days</NavLink>
                    <NavLink to={`${match}/backcountry`}>Backcountry Days</NavLink>
                </td>
            </tr>
        </thead>
        <tbody> 

            {/* {days.map((day, i) => 
                <SkiDayRow key={i} 
                            {...day}/>
            )} */}

             <Route path={match.path} render={() => <SkiDayRow />}/>
            <Route path={`${match.path}/powder`} render={() => <SkiDayRow />}/>
            <Route path={`${match.path}/backcountry`} render={() => <SkiDayRow />}/> 
        </tbody>
    </table>
    {/* <Route path="/list-days" component="SkiDayList"/>
    <Route path='/list-days/powder' component={component}/> */}

    
    </div>  
    )
}

SkiDayList.propTypes = {
    days: React.PropTypes.array
}
module.exports = SkiDayList;
