import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import "./_header.scss";

export default function Header() {
    let location = useLocation(); //get object that represents the current url

    const { pathname } = location;
    const splitLocation = pathname.split('/');
    console.log(pathname)
    return (
        <header className='header'>
            <NavBar splitLocation={splitLocation} />
            {pathname === "/" ?
                <div className='header_banner'>
                    <p>Chez vous, partout et ailleurs</p>
                </div> : splitLocation[1] === 'about' ?
                    <div className='header_banner_about'>
                    </div> : null
            }
        </header>
    )
}
