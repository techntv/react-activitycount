import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home.js'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o.js'
import ListDaysIcon from 'react-icons/lib/fa/table.js'
import React from 'react';
const Menu = () => (
    <nav className="menu">
        <NavLink to="/"><HomeIcon/></NavLink>
        <NavLink to="/add-day"><AddDayIcon/></NavLink>
        <NavLink to="/list-days"><ListDaysIcon/></NavLink>
    </nav>
)

module.exports = Menu;