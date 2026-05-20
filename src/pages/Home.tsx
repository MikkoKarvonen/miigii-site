import type { ReactNode } from 'react';
import { releases, characters, artistAbout } from '../data';
import ReleaseCard from '../components/ReleaseCard';
import CharacterCard from '../components/CharacterCard';
import { useAlternateMarkdownLink } from '../hooks/useAlternateMarkdownLink';

function ArtistImage({ src, alt }: { src: string; alt: string }) {
    return (
        <figure className="relative overflow-hidden rounded-2xl bg-base-300 ring-1 ring-base-content/10 shadow-2xl">
            <img
                src={src}
                alt={alt}
                className="w-full aspect-square object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-300/40 via-transparent to-transparent" />
        </figure>
    );
}

function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 mb-2">
            {children}
        </p>
    );
}

export default function Home() {
    useAlternateMarkdownLink();
    const albums = releases.filter(r => r.type === 'album');
    const eps = releases.filter(r => r.type === 'ep');
    const singles = releases.filter(r => r.type === 'single');

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="hero bg-base-600 h-150"
                style={{
                    backgroundImage:
                        "url(/general/header.jpg)",
                    backgroundPosition: "top"
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="text-5xl font-bold mb-4">Miigii</h1>
                        <p className="text-lg opacity-70">Electronic Music Artist</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* About Section */}
                <section id="about" className="mb-16 lg:mb-24 scroll-mt-20">
                    <header className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                        <ArtistImage src={artistAbout.image} alt="miigii" />

                        <div className="lg:pt-4">
                            <SectionLabel>Artist</SectionLabel>
                            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                                {artistAbout.title}
                            </h2>

                            <div className="divider divider-primary/30 my-0 mb-8" />

                            <div className="space-y-8">
                                {artistAbout.intro.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-base sm:text-lg leading-relaxed text-base-content/85"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {artistAbout.sections.map(section => (
                                    <div key={section.title}>
                                        <SectionLabel>{section.title}</SectionLabel>
                                        <p className="text-base sm:text-lg leading-relaxed text-base-content/85">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </header>
                </section>

                {/* Discography Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Discography</h2>

                    {/* Albums */}
                    {albums.length > 0 && (
                        <div id="albums" className="mb-8 scroll-mt-20">
                            <h3 className="text-2xl font-semibold mb-4">Albums</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {albums.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* EPs */}
                    {eps.length > 0 && (
                        <div id="eps" className="mb-8 scroll-mt-20">
                            <h3 className="text-2xl font-semibold mb-4">EPs</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {eps.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Singles */}
                    {singles.length > 0 && (
                        <div id="singles" className="mb-8 scroll-mt-20">
                            <h3 className="text-2xl font-semibold mb-4">Singles</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {singles.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Characters Section */}
                <section id="characters" className="scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-6">Characters</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {characters.map(character => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

