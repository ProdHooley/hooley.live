import { Spotify } from 'react-spotify-embed';
import { SpotifyIcon } from '../asset/spotify';
import { YoutubeIcon } from '../asset/youtube';
import { Navigate, useParams } from 'react-router-dom';
import { TRACKS } from '../model/track';

export const Preview = () => {
    const { id } = useParams();

    const track = TRACKS.find(track => track.id === id);
    if (!track) return <Navigate to="/not-found" replace={true} />;

    return (
        <div className="preview-parent" id={track.imageId}>
            <div className="preview img">
                <div className="return">
                    <a href="/">Return to home</a>
                </div>
                <div className="filter">
                    <div className="wrapper">
                        <div className="left side">
                            <div className="inner">
                                <h1>{track.title}</h1>
                                <p>
                                    {track.artist} • {track.length}
                                </p>
                                {track.spotify && (
                                    <div className="spotify">
                                        <Spotify wide link={track.spotify} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="right side">
                            <div className="inner">
                                <div className="links">
                                    {track.youtube && (
                                        <a
                                            href={track.youtube}
                                            target="_blank"
                                            rel="noreferrer">
                                            <YoutubeIcon />
                                        </a>
                                    )}

                                    {track.spotify && (
                                        <a
                                            href={track.spotify}
                                            target="_blank"
                                            rel="noreferrer">
                                            <SpotifyIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
