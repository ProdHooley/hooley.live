import { useState } from 'react';
import { ArrowLeft } from '../asset/arrow-left';
import { ArrowRight } from '../asset/arrow-right';
import { handleMouseHover } from '../effect/hover';
import { TrackProps, TRACKS } from '../model/track';
import { useNavigate } from 'react-router-dom';

const TRACKS_PER_PAGE = 3;

const Track = (props: TrackProps) => {
    const navigate = useNavigate();
    return (
    <div
        className="card"
        id={props.imageId}
        onMouseMove={handleMouseHover}
        onClick={() => navigate("/preview/" + props.id)}>
        <div className="card-content">
            <div className="img"></div>
            <h1>{props.title}</h1>
            <p>{props.artist}</p>
        </div>
    </div>
    )
};

export const Tracks = () => {
    const [cursor, setCursor] = useState(0);

    const getTracks = () => TRACKS.slice(cursor, cursor + TRACKS_PER_PAGE);

    const moveCursor = (offset: number) => {
        let newCursor = cursor + offset;
        newCursor = Math.max(0, newCursor);
        newCursor = Math.min(TRACKS.length - TRACKS_PER_PAGE, newCursor);
        setCursor(newCursor);
    };

    return (
        <div className="container showcase" id="projects">
            <div className="content">
                <div className="info">
                    <h1>Recent projects</h1>
                    <p>New tracks</p>
                </div>
                <div id="cards">
                    <div
                        className={
                            'button-desktop ' + (cursor > 0 ? 'active' : 'inactive')
                        }
                        onClick={() => moveCursor(-1)}>
                        <ArrowLeft />
                    </div>
                    {getTracks().map(track => (
                        <Track {...track} />
                    ))}
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
