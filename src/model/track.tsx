export interface TrackProps {
    id: string;
    title: string;
    artist: string;
    url: string;
}

export const TRACKS: TrackProps[] = [
    {
        id: 'song-1',
        title: 'Ethernity',
        artist: 'Hooley',
        url: 'https://www.youtube.com/watch?v=tx5wZK6pnjM'
    },
    {
        id: 'song-2',
        title: 'Peter pan was right',
        artist: 'Hooley',
        url: 'https://www.youtube.com/watch?v=ll9kEQzJuYM'
    },
    {
        id: 'song-3',
        title: 'Is this real?',
        artist: 'Hooley',
        url: 'https://www.youtube.com/watch?v=RP2LdhktMq0'
    }
];
