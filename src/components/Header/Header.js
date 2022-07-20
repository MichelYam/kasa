import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    // const routes = {
    //     Home: '/',
    // }
    let location = useLocation();
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src="../assets/logo/logo_header.png" alt="logo du site" />
                <ul className='navbar-menu'>
                    <li className='navbar-menu-item'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='navbar-menu-item'>
                        <Link to='/About'>A Propos</Link>
                    </li>
                </ul>
            </nav>
            {location.pathname === "/" ?
                <div className='header-banner'>
                    <p>Chez vous, partout et ailleurs</p>
                </div> : location.pathname === "/" ?
                    <div className='header-banner-about'>
                    </div> : null
            }
        </header>
    )
}
