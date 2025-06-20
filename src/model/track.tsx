export interface TrackProps {
    id: string;
    title: string;
    artist: string;
    length: string;
    thumbnail: string;
    youtube: string;
    spotify: string | null;
}

export const TRACKS: TrackProps[] = [
    {
        id: 'euphoria',
        title: 'Euphoria',
        artist: 'Hooley x Tony Ann',
        length: '3:48',
        thumbnail: '/img/song6.jpg',
        youtube: 'https://www.youtube.com/watch?v=4WXmkoCGk1A',
        spotify: 'https://open.spotify.com/track/372tKrcF32cVsQRVSojCNi?si=425d2f8c999946b3'
    },
    {
        id: 'ethernity',
        title: 'Ethernity',
        artist: 'Hooley',
        length: '5:03',
        thumbnail: '/img/song1.jpg',
        youtube: 'https://www.youtube.com/watch?v=tx5wZK6pnjM',
        spotify:
            'https://open.spotify.com/album/1rO9gcuoljEQdgXlb5CS2a?si=z7KCtC_qT0y_IUSHAT0XRg',
    },
    {
        id: 'peter-pan-was-right',
        title: 'Peter pan was right',
        artist: 'Hooley',
        length: '3:55',
        thumbnail: '/img/song2.jpg',
        youtube: 'https://www.youtube.com/watch?v=ll9kEQzJuYM',
        spotify: null,
    },
    {
        id: 'is-this-real',
        title: 'Is this real?',
        artist: 'Hooley',
        length: '3:09',
        thumbnail: '/img/song3.jpg',
        youtube: 'https://www.youtube.com/watch?v=RP2LdhktMq0',
        spotify:
            'https://open.spotify.com/album/6fEoodkuS6QOFcrHaUVpwE?si=lgwp_8FfSjKyoJ0DbXkk4A',
    },
    {
        id: 'face-fabc',
        title: 'FACE FABD (Cover)',
        artist: 'Hooley',
        length: '1:38',
        thumbnail: '/img/song4.jpg',
        youtube: 'https://www.youtube.com/watch?v=dygEktoGaw0',
        spotify: null
    },
    {
        id: 'awakening',
        title: 'Awakening',
        artist: 'Hooley x Berci',
        length: '1:59',
        thumbnail: '/img/song5.jpg',
        youtube: 'https://www.youtube.com/watch?v=x-FCh9V1-00',
        spotify: null
    }
];
