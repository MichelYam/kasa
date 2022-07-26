import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    let location = useLocation(); //get object that represents the current url

    const { pathname } = location;
    const splitLocation = pathname.split('/');
    
    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to='/'><img src="../assets/logo/logo_header.png" alt="logo du site" /></Link>
                <ul className='navbar-menu'>
                    <li className='navbar-menu-item'>
                        <Link className={splitLocation[1] === '' ? 'active' : ''} to='/'>Accueil</Link>
                    </li>
                    <li className='navbar-menu-item'>
                        <Link className={splitLocation[1] === 'about' ? 'active' : ''} to='/about'>A Propos</Link>
                    </li>
                </ul>
            </nav>
            {location.pathname === "/" ?
                <div className='header-banner'>
                    <p>Chez vous, partout et ailleurs</p>
                </div> : splitLocation[1] === 'about' ?
                    <div className='header-banner-about'>
                    </div> : null
            }
        </header>
    )
}
