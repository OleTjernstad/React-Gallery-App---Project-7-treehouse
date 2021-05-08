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
                    <NavLink to="/">Dogs</NavLink>
                </li>
                <li>
                    <NavLink to="/">Computers</NavLink>
                </li>
            </ul>
        </nav>
    );
};