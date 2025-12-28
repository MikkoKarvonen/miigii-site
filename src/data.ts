import type { Release, Character } from './types';

export const releases: Release[] = [
    {
        id: '1',
        title: 'Midnight Dreams',
        type: 'album',
        releaseDate: '2024-01-15',
        coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        description: 'A journey through electronic soundscapes, blending ambient textures with rhythmic beats. Midnight Dreams represents a new chapter in Miigii\'s musical evolution.',
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/example' },
            { platform: 'Apple Music', url: 'https://music.apple.com/album/example' },
            { platform: 'Bandcamp', url: 'https://miigii.bandcamp.com/album/midnight-dreams' },
            { platform: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=example' },
        ],
        characterIds: ['char1', 'char2'],
    },
    {
        id: '2',
        title: 'Neon Nights',
        type: 'ep',
        releaseDate: '2023-08-20',
        coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
        description: 'An electrifying EP featuring five tracks that capture the essence of urban nightlife through synthwave and electronic beats.',
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/example2' },
            { platform: 'Apple Music', url: 'https://music.apple.com/album/example2' },
            { platform: 'Bandcamp', url: 'https://miigii.bandcamp.com/album/neon-nights' },
        ],
        characterIds: ['char1', 'char3'],
    },
    {
        id: '3',
        title: 'Digital Pulse',
        type: 'single',
        releaseDate: '2024-03-10',
        coverArt: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        description: 'A high-energy single that fuses electronic elements with infectious rhythms. Digital Pulse showcases Miigii\'s signature sound.',
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/track/example3' },
            { platform: 'Apple Music', url: 'https://music.apple.com/song/example3' },
            { platform: 'YouTube', url: 'https://www.youtube.com/watch?v=example3' },
            { platform: 'Bandcamp', url: 'https://miigii.bandcamp.com/track/digital-pulse' },
        ],
        characterIds: ['char2'],
    },
    {
        id: '4',
        title: 'Echo Chamber',
        type: 'single',
        releaseDate: '2023-11-05',
        coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        description: 'A contemplative single exploring themes of isolation and connection in the digital age.',
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/track/example4' },
            { platform: 'Apple Music', url: 'https://music.apple.com/song/example4' },
            { platform: 'Bandcamp', url: 'https://miigii.bandcamp.com/track/echo-chamber' },
        ],
        characterIds: ['char3'],
    },
];

export const characters: Character[] = [
    {
        id: 'char1',
        name: 'Luna',
        description: 'A mysterious figure that appears in many of Miigii\'s cover arts. Luna represents the ethereal and dreamlike qualities of the music.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
    },
    {
        id: 'char2',
        name: 'Neon',
        description: 'A vibrant character embodying the energy and rhythm of electronic music. Often seen in neon-lit urban settings.',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    },
    {
        id: 'char3',
        name: 'Echo',
        description: 'A reflective character that represents the introspective side of Miigii\'s work. Echo appears in more ambient and contemplative pieces.',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    },
];

