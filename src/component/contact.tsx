import { ReactElement, useState } from 'react';
import { DiscordIcon } from '../asset/discord';
import { SoundcloudIcon } from '../asset/soundcloud';
import { SpotifyIcon } from '../asset/spotify';
import { YoutubeIcon } from '../asset/youtube';

interface ContactProps {
    icon: ReactElement;
    altIcon: ReactElement;
    url: string;
}

const Icon = ({ icon, altIcon, url }: ContactProps) => {
    const [hovering, setHovering] = useState(false);

    return (
        <div className="icon">
            <a
                target="_blank"
                rel="noreferrer"
                href={url}
                onPointerEnter={() => setHovering(true)}
                onPointerLeave={() => setHovering(false)}>
                {!hovering && icon}
                {hovering && altIcon}
            </a>
        </div>
    );
};

export const Contact = () => (
    <div className="container contact" id="contact">
        <div className="content">
            <div className="wrapper">
                <Icon
                    icon={<DiscordIcon color="white" />}
                    altIcon={<DiscordIcon color="gray" />}
                    url="https://discord.gg/Aue9jMXnR6"
                />
                <Icon
                    icon={<SoundcloudIcon color="white" />}
                    altIcon={<SoundcloudIcon color="gray" />}
                    url="https://soundcloud.com/hooley-music-200150144"
                />
                <Icon
                    icon={<YoutubeIcon color="white" />}
                    altIcon={<YoutubeIcon color="gray" />}
                    url="https://www.youtube.com/channel/UCWZHYjUg_NrfXZA02dEt4XQ"
                />
                <Icon
                    icon={<SpotifyIcon color="white" />}
                    altIcon={<SpotifyIcon color="gray" />}
                    url="https://open.spotify.com/artist/4hPWCxOXHIPTCAiOc5Xq5T"
                />
            </div>
        </div>
    </div>
);
