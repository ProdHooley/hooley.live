import { handleMouseHover } from "../effect/hover";

interface TrackProps {
    id: string;
    title: string;
    artist: string;
    url: string;
}

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
                <Track
                    id="song-1"
                    title="Ethernity"
                    artist="Hooley"
                    url="https://www.youtube.com/watch?v=tx5wZK6pnjM"
                />
                <Track
                    id="song-2"
                    title="Peter pan was right"
                    artist="Hooley"
                    url="https://www.youtube.com/watch?v=ll9kEQzJuYM"
                />
                <Track
                    id="song-3"
                    title="Is this real?"
                    artist="Hooley"
                    url="https://www.youtube.com/watch?v=RP2LdhktMq0"
                />
            </div>
        </div>
    </div>
);
