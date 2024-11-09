import { ReactElement } from 'react';
import { DiscordIcon } from '../asset/discord';
import { SoundcloudIcon } from '../asset/soundcloud';
import { SpotifyIcon } from '../asset/spotify';
import { YoutubeIcon } from '../asset/youtube';

interface ContactProps {
    icon: ReactElement;
    url: string;
}

const Icon = ({ icon, url }: ContactProps) => {
    return (
        <div className="icon">
            <a target="_blank" rel="noreferrer" href={url}>
                {icon}
            </a>
        </div>
    );
};

export const Contact = () => (
    <div className="container contact" id="contact">
        <div className="content">
            <div className="wrapper">
                <Icon
                    icon={<DiscordIcon />}
                    url="https://discord.gg/Aue9jMXnR6"
                />
                <Icon
                    icon={<SoundcloudIcon />}
                    url="https://soundcloud.com/hooley-music-200150144"
                />
                <Icon
                    icon={<YoutubeIcon />}
                    url="https://www.youtube.com/channel/UCWZHYjUg_NrfXZA02dEt4XQ"
                />
                <Icon
                    icon={<SpotifyIcon />}
                    url="https://open.spotify.com/artist/4hPWCxOXHIPTCAiOc5Xq5T"
                />
            </div>
        </div>
    </div>
);
