import { Spotify } from 'react-spotify-embed';
import { SpotifyIcon } from '../asset/spotify';
import { YoutubeIcon } from '../asset/youtube';
import { Navigate, useParams } from 'react-router-dom';
import { TRACKS } from '../model/track';

const YoutubeEmbed = ({ url }) => {
    const id = url.split('v=')[1];
    return (
        <div className="video-responsive">
            <iframe
                width={426}
                height={240}
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export const Preview = () => {
    const { id } = useParams();

    const track = TRACKS.find(track => track.id === id);
    if (!track) return <Navigate to="/not-found" replace={true} />;

    return (
        <div className="preview-parent" id={track.id}>
            <div 
                className="preview img"
                style={{
                        backgroundImage: `url(${track.thumbnail})`,
                    }}
                >
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
                                {!track.spotify && track.youtube && (
                                    <div className="youtube">
                                        <YoutubeEmbed url={track.youtube} />
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
