/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef } from 'react';

const handleNavEffect = (nav: HTMLDivElement) => {
    document.onscroll = _ => {
        let scroll = window.scrollY;
        if (scroll > 0) {
            nav.style.background = 'rgba(0, 0, 0, 0.4)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0)';
            nav.style.backdropFilter = 'blur(0px)';
        }
    };
};

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
