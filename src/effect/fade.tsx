const NAV_BACKGROUND = 'rgba(0, 0, 0, 0.4)';
const NAV_TRANSPARENT = 'rgba(255, 255, 255, 0)';

const NAV_BLUR = 'blur(10px)';
const NAV_NO_BLUR = 'blur(0px)';

export const handleNavEffect = (nav: HTMLDivElement) => {
    document.onscroll = _ => {
        let scroll = window.scrollY;
        if (scroll > 0) {
            nav.style.background = NAV_BACKGROUND;
            nav.style.backdropFilter = NAV_BLUR;
        } else {
            nav.style.background = NAV_TRANSPARENT;
            nav.style.backdropFilter = NAV_NO_BLUR;
        }
    };
};
