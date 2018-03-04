import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div  class="col-md-12">
    <header>
        <nav class="navbar navbar-default" >
            <ul>
                <li><Link to='/pd'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
    </div>
)

export default Header
