import type { Release, Character } from './types';

export const releases: Release[] = [
    {
        id: '207',
        title: 'Last Drift',
        type: 'album',
        releaseDate: '2025-09-04',
        coverArt: '/albums/LAST DRIFT.jpg',
        thumbnail: '/albums/LAST DRIFT_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3NZe4vDiROZ3GGFM4m6pLR' },
            { platform: 'Apple Music', url: 'https://music.apple.com/album/example' },
            { platform: 'Bandcamp', url: 'https://miigii.bandcamp.com/album/midnight-dreams' },
            { platform: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=example' },
        ],
    }, {
        id: '206',
        title: 'Mia and the Pre Drops',
        type: 'album',
        releaseDate: '2024-05-01',
        coverArt: '/albums/Mia and the Pre Drops.jpg',
        thumbnail: '/albums/Mia and the Pre Drops_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1B8bhEqqHl6Yk2JT0ePg0D' },
        ],
        characterIds: ['char01', 'char02', 'char03', 'char09', 'char10', 'char11', 'char12', 'char13', 'char14', 'char15'],
    },
    {
        id: '205',
        title: 'Light of Love',
        type: 'album',
        releaseDate: '2024-01-10',
        coverArt: '/albums/Light of Love.jpg',
        thumbnail: '/albums/Light of Love_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: '' },
        ],
    },
    {
        id: '204',
        title: 'Miigii',
        type: 'album',
        releaseDate: '2022-01-10',
        coverArt: '/albums/Miigii.jpg',
        thumbnail: '/albums/Miigii_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/75vq673T0INsvvo4h2mtLd' },
        ],
        characterIds: ['char01', 'char02', 'char03'],
    },
    {
        id: '203',
        title: 'Peppi and the Pre Drops',
        type: 'album',
        releaseDate: '2024-01-10',
        coverArt: '/albums/Peppi and the Pre Drops.jpg',
        thumbnail: '/albums/Peppi and the Pre Drops_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3XGd8NlOc8Z4xSQx5Zg68x' },
        ],
        characterIds: ['char01', 'char02', 'char03', 'char04', 'char05', 'char06', 'char07', 'char08', 'char09'],
    },
    {
        id: '202',
        title: '2020',
        type: 'album',
        releaseDate: '2020-12-18',
        coverArt: '/albums/2020.jpg',
        thumbnail: '/albums/2020_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/15q33nyFpSWgOEcEdSaMRs' },
        ],
    },
    {
        id: '201',
        title: 'Visions',
        type: 'album',
        releaseDate: '2019-11-20',
        coverArt: '/albums/Visions.jpg',
        thumbnail: '/albums/Visions_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/6LC4ZgCygw4gdj9nC4jFpq' },
        ],
    },
    {
        id: '061',
        title: 'Beets are Vegan',
        type: 'single',
        releaseDate: '2026-05-07',
        coverArt: '/albums/BeetsAreVegan.jpg',
        thumbnail: '/albums/BeetsAreVegan_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1bOoD1kKYrVEWZsDqfphc4' },
        ],
    },
    {
        id: '060',
        title: 'Brain Rot',
        type: 'single',
        releaseDate: '2026-04-02',
        coverArt: '/albums/BrainRot.jpg',
        thumbnail: '/albums/BrainRot_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1VxbLx2NQmQGekIR3h7Rmj' },
        ],
    },
    {
        id: '059',
        title: 'Brandy X Rum',
        type: 'single',
        releaseDate: '2026-02-19',
        coverArt: '/albums/BrandyXRum.jpg',
        thumbnail: '/albums/BrandyXRum_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/33UaaYr5ug49ZCqD2f46Ex' },
        ],
    },
    {
        id: '058',
        title: 'Wanted (Unalive or Alive)',
        type: 'single',
        releaseDate: '2026-01-15',
        coverArt: '/albums/Wanted.jpg',
        thumbnail: '/albums/Wanted_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0H4V6cavu10vzI48iB85E2' },
        ],
    },
    {
        id: '057',
        title: 'House Ska',
        type: 'single',
        releaseDate: '2026-01-08',
        coverArt: '/albums/House Ska.jpg',
        thumbnail: '/albums/House Ska_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/7If07pRGYPYUocqNZcPh5v' },
        ],
    },
    {
        id: '056',
        title: 'Torille',
        type: 'single',
        releaseDate: '2025-12-04',
        coverArt: '/albums/Torille.jpg',
        thumbnail: '/albums/Torille_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3MULrVFv3AoKA4p1ChNHS2' },
        ],
    },
    {
        id: '055',
        title: 'Pilluralli',
        type: 'single',
        releaseDate: '2024-11-13',
        coverArt: '/albums/Pilluralli.jpg',
        thumbnail: '/albums/Pilluralli_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4XwpnfjP8nagXxKWV8t1V6' },
        ],
    },
    {
        id: '054',
        title: 'Running',
        type: 'single',
        releaseDate: '2024-08-25',
        coverArt: '/albums/Running.jpg',
        thumbnail: '/albums/Running_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3K7WTdPZUpRtiUyk4LpuzE' },
        ],
    },
    {
        id: '053',
        title: 'Cattack',
        type: 'single',
        releaseDate: '2024-08-05',
        coverArt: '/albums/Cattack.jpg',
        thumbnail: '/albums/Cattack_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5fvDb3rG5fTGSoCQu3RB17' },
        ],
    },
    {
        id: '052',
        title: 'Bailao',
        type: 'single',
        releaseDate: '2024-09-10',
        coverArt: '/albums/Bailao.jpg',
        thumbnail: '/albums/Bailao_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1TlYb54WQ9taA31fU9cLLV' },
        ],
    },
    {
        id: '051',
        title: 'Mantra da Deriva',
        type: 'single',
        releaseDate: '2024-07-22',
        coverArt: '/albums/Mantra da Deriva.jpg',
        thumbnail: '/albums/Mantra da Deriva_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/2dwYGH5nU46dcakH9uY3yx' },
        ],
    },
    {
        id: '050',
        title: 'FORTE',
        type: 'single',
        releaseDate: '2024-06-18',
        coverArt: '/albums/FORTE.jpg',
        thumbnail: '/albums/FORTE_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4nC6vV9FmWj1kKEZLpiwOw' },
        ],
    },
    {
        id: '049',
        title: 'BASTU EM FÚRIA',
        type: 'single',
        releaseDate: '2024-05-12',
        coverArt: '/albums/Bastu.jpg',
        thumbnail: '/albums/Bastu_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4utplnF7t9cGsmvjPfM9gs' },
        ],
    },
    {
        id: '048',
        title: 'HALO',
        type: 'single',
        releaseDate: '2025-01-10',
        coverArt: '/albums/Halo.jpg',
        thumbnail: '/albums/Halo_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/7Cf5yZaQkpjAsyJkxgNF3A' },
        ],
    },
    {
        id: '047',
        title: 'Don\'t Stop',
        type: 'single',
        releaseDate: '2024-10-25',
        coverArt: '/albums/Don\'t Stop.jpg',
        thumbnail: '/albums/Don\'t Stop_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3mnHLuLuMoPfopWI7qfFHv' },
        ],
    },
    {
        id: '046',
        title: 'Marathon of Betrayal',
        type: 'single',
        releaseDate: '2024-10-10',
        coverArt: '/albums/Marathon of Betrayal.jpg',
        thumbnail: '/albums/Marathon of Betrayal_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3ZqQtNgwOtqiRnSmN9n47I' },
        ],
    },
    {
        id: '045',
        title: 'Hit the Breaks',
        type: 'single',
        releaseDate: '2024-07-28',
        coverArt: '/albums/Hit the Breaks.jpg',
        thumbnail: '/albums/Hit the Breaks_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1fqdIZnXHRgZvwnANjiCyu' },
        ],
    },
    {
        id: '044',
        title: 'Favela',
        type: 'single',
        releaseDate: '2024-06-01',
        coverArt: '/albums/Favela.jpg',
        thumbnail: '/albums/Favela_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5y8g9p1xsCMHIiGwVxr3of' },
        ],
    },
    {
        id: '043',
        title: 'PONTO CEGO',
        type: 'single',
        releaseDate: '2024-05-01',
        coverArt: '/albums/Ponto Cego.jpg',
        thumbnail: '/albums/Ponto Cego_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4sr6FIPS5c6HBY63DWYc3y' },
        ],
    },
    {
        id: '042',
        title: 'Transformation',
        type: 'single',
        releaseDate: '2024-02-14',
        coverArt: '/albums/Transformation.jpg',
        thumbnail: '/albums/Transformation_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5l2zn97CTTraY7DOQPSvjR' },
        ],
    },
    {
        id: '041',
        title: 'honk',
        type: 'single',
        releaseDate: '2024-01-20',
        coverArt: '/albums/honk.jpg',
        thumbnail: '/albums/honk_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/7AXj3znuuFXqwEBTlhpnMg' },
        ],
    },
    {
        id: '040',
        title: 'Peppi and the Pre Drops, Vol. 2',
        type: 'single',
        releaseDate: '2024-03-20',
        coverArt: '/albums/Peppi and the Pre Drops, Vol. 2.jpg',
        thumbnail: '/albums/Peppi and the Pre Drops, Vol. 2_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/02TqpGP1wjjAM3YwHbaF11' },
        ],
        characterIds: ['char01', 'char02', 'char03', 'char09', 'char10']
    },
    {
        id: '039',
        title: 'TRAFFIC',
        type: 'single',
        releaseDate: '2023-11-10',
        coverArt: '/albums/Traffic.jpg',
        thumbnail: '/albums/Traffic_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0Vj5x1a6TWj4AiDoV9xrDw' },
        ],
        characterIds: ['char10']
    },
    {
        id: '038',
        title: 'Lo-fi Dreams',
        type: 'single',
        releaseDate: '2021-09-03',
        coverArt: '/albums/Lo-fi Dreams.jpg',
        thumbnail: '/albums/Lo-fi Dreams_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/63PjjU5bJ9Cmaukvkka4aU' },
        ],
        characterIds: ['char01', 'char02']
    },
    {
        id: '137',
        title: 'SOS',
        type: 'ep',
        releaseDate: '2021-04-16',
        coverArt: '/albums/SOS.jpg',
        thumbnail: '/albums/SOS_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0rwi1XXwNvxrfcAIoIcOVn' },
        ],
        characterIds: ['char01', 'char02', 'char03']
    },
    {
        id: '036',
        title: 'Podcast Junkie',
        type: 'single',
        releaseDate: '2020-03-27',
        coverArt: '/albums/Podcast Junkie.jpg',
        thumbnail: '/albums/Podcast Junkie_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/70CmmoNro3YEmsGhsemiG4' },
        ],
        characterIds: ['char01', 'char02']
    },
    {
        id: '035',
        title: 'The Sound',
        type: 'single',
        releaseDate: '2019-11-08',
        coverArt: '/albums/The Sound.jpg',
        thumbnail: '/albums/The Sound_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/24zdFWluem9uqvfHdU2l9h' },
        ],
    },
    {
        id: '034',
        title: 'Destruction',
        type: 'single',
        releaseDate: '2019-09-27',
        coverArt: '/albums/Destruction.jpg',
        thumbnail: '/albums/Destruction_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0OfUmJpdMqjl5mwIt17MnC' },
        ],
    },
    {
        id: '033',
        title: 'Soul',
        type: 'single',
        releaseDate: '2019-07-26',
        coverArt: '/albums/Soul.jpg',
        thumbnail: '/albums/Soul_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4AoSMGkRw2jclj30wFVCQc' },
        ],
    },
    {
        id: '032',
        title: 'It Blows Me Away',
        type: 'single',
        releaseDate: '2019-06-21',
        coverArt: '/albums/It Blows me Away.jpg',
        thumbnail: '/albums/It Blows me Away_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3kq49wWrHqtP1lwp5Mjq3s' },
        ],
    },
    {
        id: '031',
        title: 'The Legend of the Onyx Stranger',
        type: 'single',
        releaseDate: '2019-05-17',
        coverArt: '/albums/The Legend of the Onyx Stranger.jpg',
        thumbnail: '/albums/The Legend of the Onyx Stranger_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4jx3NO8qwgsuw4qGNU1ZZv' },
        ],
    },
    {
        id: '030',
        title: 'Distant',
        type: 'single',
        releaseDate: '2019-04-12',
        coverArt: '/albums/Distant.jpg',
        thumbnail: '/albums/Distant_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/57gBOPdHfdUoiClcI3dPM3' },
        ],
    },
    {
        id: '029',
        title: 'Careless',
        type: 'single',
        releaseDate: '2019-03-08',
        coverArt: '/albums/Careless.jpg',
        thumbnail: '/albums/Careless_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4jkR9VV6YyyYDASvG8Miwu' },
        ],
    },
    {
        id: '028',
        title: 'I Don\'t Know',
        type: 'single',
        releaseDate: '2019-01-25',
        coverArt: '/albums/I Dont Know.jpg',
        thumbnail: '/albums/I Dont Know_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0zYK9D8UoLP8IaRLFodZWa' },
        ],
    },
    {
        id: '027',
        title: 'Big Room | Bigger Presents',
        type: 'single',
        releaseDate: '2018-12-14',
        coverArt: '/albums/Big Room Bigger Presents.jpg',
        thumbnail: '/albums/Big Room Bigger Presents_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3el7uQFP0qjQI4P2AukfAd' },
        ],
    },
    {
        id: '026',
        title: 'Metronome',
        type: 'single',
        releaseDate: '2018-11-23',
        coverArt: '/albums/Metronome.jpg',
        thumbnail: '/albums/Metronome_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1Y5iG26FwOYeJHUocYzAhS' },
        ],
    },
    {
        id: '025',
        title: 'Pretender',
        type: 'single',
        releaseDate: '2018-11-02',
        coverArt: '/albums/Pretender.jpg',
        thumbnail: '/albums/Pretender_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5MncDuyNwf7BUioU65EPF1' },
        ],
    },
    {
        id: '024',
        title: 'Suburban Satisfaction',
        type: 'single',
        releaseDate: '2018-10-12',
        coverArt: '/albums/Suburban Satisfaction.jpg',
        thumbnail: '/albums/Suburban Satisfaction_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5TKXNuZnhbb0QnM9KNiGvU' },
        ],
    },
    {
        id: '023',
        title: 'Set Me Free',
        type: 'single',
        releaseDate: '2018-09-21',
        coverArt: '/albums/Set Me Free.jpg',
        thumbnail: '/albums/Set Me Free_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5Akf1GZ8XwB7lQ7vXSQB63' },
        ],
    },
    {
        id: '022',
        title: 'Asd',
        type: 'single',
        releaseDate: '2018-08-31',
        coverArt: '/albums/asd.jpg',
        thumbnail: '/albums/asd_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5UxLlgpnFEsx2z2EJ62YvY' },
        ],
    },
    {
        id: '021',
        title: 'Waiting',
        type: 'single',
        releaseDate: '2018-08-10',
        coverArt: '/albums/Waiting.jpg',
        thumbnail: '/albums/Waiting_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/78Avhh1MOd1i1dUFXsQ8Y2' },
        ],
    },
    {
        id: '020',
        title: 'She',
        type: 'single',
        releaseDate: '2018-07-20',
        coverArt: '/albums/She.jpg',
        thumbnail: '/albums/She_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5VLsrMxihGBO5GU6g0x4Ri' },
        ],
    },
    {
        id: '019',
        title: 'Game On',
        type: 'single',
        releaseDate: '2018-06-29',
        coverArt: '/albums/Game On.jpg',
        thumbnail: '/albums/Game On_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1rHLBVKL3TNBFWRPMHCHkI' },
        ],
    },
    {
        id: '018',
        title: 'Jungle Demon',
        type: 'single',
        releaseDate: '2018-06-08',
        coverArt: '/albums/Jungle Demon.jpg',
        thumbnail: '/albums/Jungle Demon_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/1VmCnqdhfUMkS7kD8Eeesk' },
        ],
    },
    {
        id: '017',
        title: 'Style of the Future',
        type: 'single',
        releaseDate: '2018-05-18',
        coverArt: '/albums/Style of the Future.jpg',
        thumbnail: '/albums/Style of the Future_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/2GnkB7TVBRjGeytKvl15mx' },
        ],
    },
    {
        id: '016',
        title: 'Cruising',
        type: 'single',
        releaseDate: '2018-04-27',
        coverArt: '/albums/Cruising.jpg',
        thumbnail: '/albums/Cruising_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4dPZzQ7FvKbbjp6dPHhp6h' },
        ],
    },
    {
        id: '015',
        title: 'Swing',
        type: 'single',
        releaseDate: '2018-04-06',
        coverArt: '/albums/Swing.jpg',
        thumbnail: '/albums/Swing_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4jfkEKJxQCOLXSqw7oFTjZ' },
        ],
    },
    {
        id: '014',
        title: 'You\'ll Never Know',
        type: 'single',
        releaseDate: '2018-03-16',
        coverArt: '/albums/Youll Never Know.jpg',
        thumbnail: '/albums/Youll Never Know_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/6dRP6ENlkRslnvUaORXxIe' },
        ],
    },
    {
        id: '013',
        title: 'Beat Is the Answer VIP',
        type: 'single',
        releaseDate: '2018-02-23',
        coverArt: '/albums/Beat is the Answer VIP.jpg',
        thumbnail: '/albums/Beat is the Answer VIP_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4kGuONzWb5jpwipbOq45DW' },
        ],
    },
    {
        id: '012',
        title: 'Learning Machine',
        type: 'single',
        releaseDate: '2018-02-02',
        coverArt: '/albums/Learning Machine.jpg',
        thumbnail: '/albums/Learning Machine_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/7bNiW9kEwEDb7J2nxRIApe' },
        ],
    },
    {
        id: '011',
        title: 'Cordion',
        type: 'single',
        releaseDate: '2018-01-12',
        coverArt: '/albums/Cordion.jpg',
        thumbnail: '/albums/Cordion_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/2UnZwrQ15NH64tDY8W0fBL' },
        ],
    },
    {
        id: '010',
        title: 'B U',
        type: 'single',
        releaseDate: '2018-01-05',
        coverArt: '/albums/BU.jpg',
        thumbnail: '/albums/BU_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/28zHGK6JM786PGn4Z2KKHZ' },
        ],
    },
    {
        id: '009',
        title: 'Loose Battle',
        type: 'single',
        releaseDate: '2017-12-08',
        coverArt: '/albums/Loose Battle.jpg',
        thumbnail: '/albums/Loose Battle_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/5gYszSNBHXJUOSqQhisMLB' },
        ],
    },
    {
        id: '008',
        title: 'Yellow Yellow',
        type: 'single',
        releaseDate: '2017-11-17',
        coverArt: '/albums/Yellow Yellow.jpg',
        thumbnail: '/albums/Yellow Yellow_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/7aVNDYX343cAcwfjcuia7d' },
        ],
    },
    {
        id: '007',
        title: 'Silent Riot',
        type: 'single',
        releaseDate: '2017-10-27',
        coverArt: '/albums/Silent Riot.jpg',
        thumbnail: '/albums/Silent Riot_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/319SRdrVDHQcU5C6HAWBrx' },
        ],
    },
    {
        id: '006',
        title: 'Escape from Reality',
        type: 'single',
        releaseDate: '2017-10-06',
        coverArt: '/albums/Escape from Reality.jpg',
        thumbnail: '/albums/Escape from Reality_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0JvwYioI3Kg68YzcOcVq3L' },
        ],
    },
    {
        id: '005',
        title: 'Beat Is the Answer',
        type: 'single',
        releaseDate: '2017-09-15',
        coverArt: '/albums/Beat is the Answer.jpg',
        thumbnail: '/albums/Beat is the Answer_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/4dsiEUXIGeTiW3Jw8xTaez' },
        ],
    },
    {
        id: '004',
        title: 'Forgotten Bubbles',
        type: 'single',
        releaseDate: '2017-08-25',
        coverArt: '/albums/Forgotten Bubbles.jpg',
        thumbnail: '/albums/Forgotten Bubbles_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/2XJPXPd7ycvq2y5F8pw58P' },
        ],
    },
    {
        id: '003',
        title: 'Regret Knows How to Party',
        type: 'single',
        releaseDate: '2017-08-04',
        coverArt: '/albums/Regret Knows How to Party.jpg',
        thumbnail: '/albums/Regret Knows How to Party_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/3eSosHZzO9nSVCwRmi53QQ' },
        ],
    },
    {
        id: '002',
        title: 'Real Weekend',
        type: 'single',
        releaseDate: '2017-07-14',
        coverArt: '/albums/Real Weekend.jpg',
        thumbnail: '/albums/Real Weekend_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: '' },
        ],
    },
    {
        id: '001',
        title: 'Creativity on Ice',
        type: 'single',
        releaseDate: '2017-06-23',
        coverArt: '/albums/Creativity on Ice.jpg',
        thumbnail: '/albums/Creativity on Ice_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/0AqFD5kHlEH6PdbZLaHnlY' },
        ],
    },
    {
        id: '-001',
        title: 'Cry of Sand',
        type: 'single',
        releaseDate: '2017-06-23',
        coverArt: '/albums/Cry of Sand.jpg',
        thumbnail: '/albums/Cry of Sand_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: 'https://open.spotify.com/album/6rlk2I8TGW7n2zwMwOygoV' },
        ],
    },
    {
        id: '-002',
        title: 'Illusion',
        type: 'single',
        releaseDate: '2017-06-23',
        coverArt: '/albums/Illusion.jpg',
        thumbnail: '/albums/Illusion_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: '' },
        ],
    },
    {
        id: '-003',
        title: 'Looking for the Muse',
        type: 'single',
        releaseDate: '2017-06-23',
        coverArt: '/albums/Looking for the Muse.jpg',
        thumbnail: '/albums/Looking for the Muse_small.jpg',
        description: "",
        streamingLinks: [
            { platform: 'Spotify', url: '' },
        ],
    }
];

export const characters: Character[] = [
    {
        id: 'char01',
        name: 'Mia',
        description: 'Mia, a character who embodies a sleek, "modern-cool" aesthetic with a bit of a futuristic edge. Mia’s style is streamlined, mixing streetwear comfort with sharp, intentional details.',
        image: '/characters/main/Mia.jpg',
        thumbnail: '/characters/main/Mia_small.jpg',
        years: [{
            year: '2022',
            description: "",
            image: '/characters/years/2022/Mia.jpg',
            clothes: [{
                name: "Shirt and skirt",
                product: "dForce Daydream for Genesis 8 Female(s)",
                link: "https://www.daz3d.com/dforce-daydream-for-genesis-8-females-"
            }]
        }, {
            year: '2022.2',
            description: "Channel Mia’s effortless street-chic aesthetic with this high-contrast look. Featuring a ribbed, vibrant cobalt long-sleeve mock-neck with a sharp asymmetric shoulder cutout, paired perfectly with a high-waisted black mini skirt. Complete the laid-back pop look with classic low-top canvas sneakers.",
            image: '/characters/years/2022/Mia2.jpg',
            clothes: []
        }, {
            year: '2024',
            description: "Capture sophisticated, modern elegance with this structured cocktail dress. Featuring a vibrant metallic turquoise base adorned with an intricate black damask pattern, it is elevated by a sheer, delicate black lace collar overlay. Styled with gold-detailed strappy heels and dramatic geometric drop earrings for a sleek evening statement.",
            image: '/characters/years/2024/Mia.jpg',
            clothes: []
        }, {
            year: '2025',
            description: "Go full speed ahead into Y2K festival style with this high-octane athleisure set. The look pairs a cropped, zip-up royal blue speed-jacket with matching high-cut shorts, both framed by signature black-and-white checkered trim. Take the outfit to the extreme with metallic blue thigh-high boots and retro-rim frames.",
            image: '/characters/years/2025/Mia.jpg',
            clothes: [{
                name: "Outfit",
                product: "Racing Queen's Outfit for Genesis 8 Female(s)",
                link: "https://www.daz3d.com/racing-queens-outfit-for-genesis-8-females"
            }]
        }, {
            year: '2026',
            description: "Dive into a futuristic grunge fantasy with this iridescent lavender mini dress. It boasts a structured, supportive corset bodice, multi-tiered ruffle satin skirts, and delicate black lace accents along the trim. Edged up with fishnets, a matching ribbon choker, and cybernetic silver multi-buckle platform boots.",
            image: '/characters/years/2026/Mia.jpg',
            clothes: [{
                name: "Outfit",
                product: "dForce Sweet Chaoz Outfit for Genesis 8 and 8.1 Females",
                link: "https://www.daz3d.com/dforce-sweet-chaoz-outfit-for-genesis-8-and-81-females"
            }]
        }]
    },
    {
        id: 'char02',
        name: 'Peppi',
        description: 'Peppi likely has a personality as sharp as her fashion sense. She’s the type of character who is effortlessly cool but possesses a quirky, confident charm—never afraid to mix textures, colors, and eras to create a look that is uniquely her own.',
        image: '/characters/main/Peppi.jpg',
        thumbnail: '/characters/main/Peppi_small.jpg',
        years: [{
            //     year: '2021',
            //     description: "",
            //     image: '/characters/years/2021/Peppi.jpg',
            //     clothes: []
            // }, {
            year: '2022',
            description: "",
            image: '/characters/years/2022/Peppi.jpg',
            clothes: []
        }, {
            year: '2022.2',
            description: "",
            image: '/characters/years/2022/Peppi2.jpg',
            clothes: []
        }, {
            //     year: '2023',
            //     description: "",
            //     image: '/characters/years/2023/Peppi.jpg',
            //     clothes: []
            // }, {
            year: '2024',
            description: "",
            image: '/characters/years/2024/Peppi.jpg',
            clothes: []
        }, {
            //     year: '2025',
            //     description: "",
            //     image: '/characters/years/2025/Peppi.jpg',
            //     clothes: []
            // }, {
            year: '2026',
            description: "",
            image: '/characters/years/2026/Peppi.jpg',
            clothes: []
        }]
    },
    {
        id: 'char03',
        name: 'Aki',
        description: 'Aki possesses a quiet, contemplative confidence and likely values quality and longevity in his choices. While the others might jump into the latest digital trends, Aki is the one analyzing the situation, offering a steady hand and a discerning eye.',
        image: '/characters/main/Aki.jpg',
        thumbnail: '/characters/main/Aki.jpg',
        years: []
    },
    {
        id: 'char04',
        name: 'Unicorn Slayers United (USU)',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/Usu.jpg',
        thumbnail: '/characters/main/Usu.jpg',
        years: []
    },
    {
        id: 'char05',
        name: 'EmOhAreAreEyeEss',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/EmOhAreAreEyeEss.jpg',
        thumbnail: '/characters/main/EmOhAreAreEyeEss.jpg',
        years: []
    },
    {
        id: 'char06',
        name: 'Peppermint Ivory',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/Peppermint Ivory.jpg',
        thumbnail: '/characters/main/Peppermint Ivory.jpg',
        years: []
    },
    {
        id: 'char07',
        name: 'Wilbur Macdonald',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/Wilbur Macdonald.jpg',
        thumbnail: '/characters/main/Wilbur Macdonald.jpg',
        years: []
    },
    {
        id: 'char08',
        name: 'Dashing Purple One',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/Dashing Purple One.jpg',
        thumbnail: '/characters/main/Dashing Purple One.jpg',
        years: []
    },
    {
        id: 'char09',
        name: 'Mr. Y',
        description: 'Guest of Peppi and the Pre Drops.',
        image: '/characters/main/Mr. Y.jpg',
        thumbnail: '/characters/main/Mr. Y.jpg',
        years: []
    },
    {
        id: 'char10',
        name: 'ANNABXLLA',
        description: 'Guest of Peppi and the Pre Drops Vol 2.',
        image: '/characters/main/ANNABXLLA.jpg',
        thumbnail: '/characters/main/ANNABXLLA.jpg',
        years: []
    },
    {
        id: 'char11',
        name: 'Kinship Duo',
        description: 'Guest of Mia and the Pre Drops.',
        image: '/null.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
    {
        id: 'char12',
        name: 'Zakres',
        description: 'Guest of Mia and the Pre Drops.',
        image: '/null.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
    {
        id: 'char13',
        name: 'Pipery Venom Trip',
        description: 'Guest of Mia and the Pre Drops.',
        image: '/null.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
    {
        id: 'char14',
        name: 'Flux Echo',
        description: 'Guest of Mia and the Pre Drops.',
        image: '/null.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
    {
        id: 'char15',
        name: 'Femmetech',
        description: 'Guest of Mia and the Pre Drops.',
        image: '/null.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
    {
        id: 'char16',
        name: '?',
        description: '?',
        image: '/characters/main/qm.jpg',
        thumbnail: '/null.jpg',
        years: []
    },
];

