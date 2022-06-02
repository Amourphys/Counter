import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import { PATH } from '../App';

const linkIsActive = (props: { isActive: boolean }) => props.isActive ? s.active : ''

const Navigation = () => {
    return (
        <nav className={s.nav_wrapper}>
            <ul>
                <li>
                    <NavLink to={PATH.C1.link} className={linkIsActive}>
                        {PATH.C1.name}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.C2.link} className={linkIsActive}>
                        {PATH.C2.name}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.C3.link} className={linkIsActive}>
                        {PATH.C3.name}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;