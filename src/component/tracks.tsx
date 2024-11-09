import { handleMouseHover } from '../effect/hover';
import { TrackProps, TRACKS } from '../model/track';

const Track = (props: TrackProps) => (
    <div
        className="card"
        id={props.id}
        onMouseMove={handleMouseHover}
        onClick={() => window.open(props.url, '_blank', 'noopener,noreferrer')}>
        <div className="card-content">
            <div className="img"></div>
            <h1>{props.title}</h1>
            <p>{props.artist}</p>
        </div>
    </div>
);

export const Tracks = () => (
    <div className="container showcase" id="projects">
        <div className="content">
            <div className="info">
                <h1>Recent projects</h1>
                <p>New tracks</p>
            </div>
            <div id="cards">
                {TRACKS.map(track => (
                    <Track {...track} />
                ))}
            </div>
        </div>
    </div>
);
