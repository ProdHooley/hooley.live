import { useEffect, useState } from 'react';
import { ArrowLeft } from '../asset/arrow-left';
import { ArrowRight } from '../asset/arrow-right';
import { handleMouseHover } from '../effect/hover';
import { TrackProps, TRACKS } from '../model/track';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const TRACKS_PER_PAGE = 3;

const CARD_WIDTH = 200;
const CARD_HEIGHT = 260;
const CARD_GAP = 18;

const Track = (props: TrackProps) => {
    const navigate = useNavigate();
    return (
        <div
            className="card"
            id={props.id}
            onMouseMove={handleMouseHover}
            onClick={() => navigate("/preview/" + props.id)}>
            <div className="card-content">
                <div className="img" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
                <h1>{props.title}</h1>
                <p>{props.artist}</p>
            </div>
        </div>
    )
};


function useIsMobile(breakpoint = 830) {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return isMobile;
}

export const Tracks = () => {
    const [cursor, setCursor] = useState(0);
    const isMobile = useIsMobile();

    const getTracks = () => TRACKS.slice(cursor, cursor + TRACKS_PER_PAGE);

    const moveCursor = (offset: number) => {
        let newCursor = cursor + offset;
        newCursor = Math.max(0, newCursor);
        newCursor = Math.min(TRACKS.length - TRACKS_PER_PAGE, newCursor);
        setCursor(newCursor);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => !isMobile && moveCursor(1),
        onSwipedRight: () => !isMobile && moveCursor(-1),
        onSwipedUp: () => isMobile && moveCursor(1),
        onSwipedDown: () => isMobile && moveCursor(-1),
        trackMouse: true,
        preventScrollOnSwipe: true
    });

    const translate = isMobile
        ? `translateY(-${cursor * (CARD_HEIGHT + CARD_GAP)}px)`
        : `translateX(-${cursor * (CARD_WIDTH + CARD_GAP)}px)`;

    return (
        <div className="container showcase" id="projects">
            <div className="content">
                <div className="info">
                    <h1>Recent projects</h1>
                    <p>New tracks</p>
                </div>
                <div id="cards" {...swipeHandlers}>
                    <div
                        className={
                            'button-desktop ' + (cursor > 0 ? 'active' : 'inactive')
                        }
                        onClick={() => moveCursor(-1)}>
                        <ArrowLeft />
                    </div>

                    <div className={`window ${isMobile ? 'mobile' : ''}`}>
                        <div className={`wrapper ${isMobile ? 'mobile' : ''}`}
                            style={{ transform: translate }}
                        >
                            {TRACKS.map(track => (
                                <Track {...track} />
                            ))}
                        </div>
                    </div>

                    <div
                        className={
                            'button-desktop ' +
                            (cursor + TRACKS_PER_PAGE < TRACKS.length
                                ? 'active'
                                : 'inactive')
                        }
                        onClick={() => moveCursor(+1)}>
                        <ArrowRight />
                    </div>
                </div>
                <div className="buttons-mobile">
                    <div className="wrapper">
                        <div
                            className={
                                'button ' + (cursor > 0 ? 'active' : 'inactive')
                            }
                            onClick={() => moveCursor(-1)}>
                            <ArrowLeft />
                        </div>
                        <div
                            className={
                                'button ' +
                                (cursor + TRACKS_PER_PAGE < TRACKS.length
                                    ? 'active'
                                    : 'inactive')
                            }
                            onClick={() => moveCursor(+1)}>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
