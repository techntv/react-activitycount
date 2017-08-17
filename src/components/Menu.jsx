import {Link} from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home.js'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o.js'
import ListDaysIcon from 'react-icons/lib/fa/table.js'
import React from 'react';
const Menu = () => (
    <nav className="menu">
        <Link to="/"><HomeIcon/></Link>
        <Link to="/add-day"><AddDayIcon/></Link>
        <Link to="/list-days"><ListDaysIcon/></Link>
    </nav>
)

module.exports = Menu;