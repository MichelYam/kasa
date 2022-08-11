import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import "./_header.scss";

export default function Header() {
    let location = useLocation(); //get object that represents the current url

    const { pathname } = location;
    const splitLocation = pathname.split('/');

    return (
        <header className='header'>
            <NavBar splitLocation={splitLocation} />
        </header>
    )
}
