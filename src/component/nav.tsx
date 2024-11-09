/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef } from 'react';
import { handleNavEffect } from '../effect/fade';

export const Nav = () => {
    const nav = useRef<HTMLDivElement>(null);
    useEffect(() => handleNavEffect(nav.current!));

    return (
        <div className="container nav" id="nav" ref={nav}>
            <div className="content">
                <div className="left side">
                    <a href="/">
                        <h1>Hooley</h1>
                    </a>
                </div>
                <div className="right side">
                    <a href="#">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
};
