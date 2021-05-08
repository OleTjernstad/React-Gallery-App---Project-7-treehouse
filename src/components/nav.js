import { NavLink } from 'react-router-dom';
import React from 'react';

export const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li>
                    <NavLink to="/">Cats</NavLink>
                </li>
                <li>
                    <a href="#">Dogs</a>
                </li>
                <li>
                    <a href="#">Computers</a>
                </li>
            </ul>
        </nav>
    );
};
