import { releases, characters } from '../data';
import ReleaseCard from '../components/ReleaseCard';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
    const albums = releases.filter(r => r.type === 'album');
    const eps = releases.filter(r => r.type === 'ep');
    const singles = releases.filter(r => r.type === 'single');

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="hero bg-base-300 py-16">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-4">Miigii</h1>
                        <p className="text-lg opacity-70">Electronic Music Artist</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Discography Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Discography</h2>

                    {/* Albums */}
                    {albums.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">Albums</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {albums.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* EPs */}
                    {eps.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">EPs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {eps.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Singles */}
                    {singles.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">Singles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {singles.map(release => (
                                    <ReleaseCard key={release.id} release={release} />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Characters Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Characters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {characters.map(character => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

