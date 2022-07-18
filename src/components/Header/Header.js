import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    // const routes = {
    //     Home: '/',
    // }
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src="../../../public/assets/logo/logo_header.png" alt="logo du site" />
                <ul className='navbar-menu'>
                    <li className='navbar-menu-item'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='navbar-menu-item'>
                        <Link to='/About'>A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
