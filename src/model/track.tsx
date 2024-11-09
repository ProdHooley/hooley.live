export interface TrackProps {
    id: string;
    imageId: string;
    title: string;
    artist: string;
    length: string;
    thumbnail: string;
    youtube: string;
    spotify: string | null;
}

export const TRACKS: TrackProps[] = [
    {
        id: 'ethernity',
        imageId: 'song-1',
        title: 'Ethernity',
        artist: 'Hooley',
        length: '5:03',
        thumbnail: '/public/img/song1.jpg',
        youtube: 'https://www.youtube.com/watch?v=tx5wZK6pnjM',
        spotify:
            'https://open.spotify.com/album/1rO9gcuoljEQdgXlb5CS2a?si=z7KCtC_qT0y_IUSHAT0XRg',
    },
    {
        id: 'peter-pan-was-right',
        imageId: 'song-2',
        title: 'Peter pan was right',
        artist: 'Hooley',
        length: '3:55',
        thumbnail: '/public/img/song2.jpg',
        youtube: 'https://www.youtube.com/watch?v=ll9kEQzJuYM',
        spotify: null,
    },
    {
        id: 'is-this-real',
        imageId: 'song-3',
        title: 'Is this real?',
        artist: 'Hooley',
        length: '3:09',
        thumbnail: '/public/img/song3.jpg',
        youtube: 'https://www.youtube.com/watch?v=RP2LdhktMq0',
        spotify:
            'https://open.spotify.com/album/6fEoodkuS6QOFcrHaUVpwE?si=lgwp_8FfSjKyoJ0DbXkk4A',
    },
    {
        id: 'face-fabc',
        imageId: 'song-4',
        title: 'FACE FABC (Cover)',
        artist: 'Hooley',
        length: '1:38',
        thumbnail: '/public/img/song4.jpg',
        youtube: 'https://www.youtube.com/watch?v=dygEktoGaw0',
        spotify: null
    },
    {
        id: 'awakening',
        imageId: 'song-5',
        title: 'Awakening',
        artist: 'Hooley x Berci',
        length: '1:59',
        thumbnail: '/public/img/song5.jpg',
        youtube: 'https://www.youtube.com/watch?v=x-FCh9V1-00',
        spotify: null
    },
];
