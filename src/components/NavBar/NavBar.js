import React from 'react'
import { Link } from 'react-router-dom';

import "./_navbar.scss";

export default function NavBar({ splitLocation }) {
    return (
        <nav className='navbar'>
            <Link to='/'><img src="/assets/logo/logo_header.png" alt="logo du site" /></Link>
            <ul className='navbar_menu'>
                <li className='navbar_menu_item'>
                    <Link className={splitLocation[1] === '' ? 'active' : ''} to='/'>Accueil</Link>
                </li>
                <li className='navbar_menu_item'>
                    <Link className={splitLocation[1] === 'about' ? 'active' : ''} to='/about'>A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}
