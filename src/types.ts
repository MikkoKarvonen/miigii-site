export type ReleaseType = 'album' | 'ep' | 'single';

export interface StreamingLink {
    platform: string;
    url: string;
}

export interface Release {
    id: string;
    title: string;
    type: ReleaseType;
    releaseDate: string;
    coverArt: string;
    description: string;
    streamingLinks: StreamingLink[];
    characterIds?: string[];
}

export interface Clothing {
    name: string;
    product: string;
    link: string;
}

export interface CharacterYear {
    year: string;
    description: string;
    image: string;
    clothes: Clothing[]
}

export interface Character {
    id: string;
    name: string;
    description: string;
    image: string;
    years: CharacterYear[]
}

