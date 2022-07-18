import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const routes = {
        Home: '/',
    }
    return (
        <header>
            <nav >
                <img src="" alt="" />
                <ul>
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
