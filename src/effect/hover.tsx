const MOUSE_X = '--mouse-x';
const MOUSE_Y = '--mouse-y';

export const handleMouseHover = (e: any) => {
    for (const card of document.getElementsByClassName('card') as any) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty(MOUSE_X, `${x}px`);
        card.style.setProperty(MOUSE_Y, `${y}px`);
    }
};
