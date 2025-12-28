import { useParams, Link } from 'react-router-dom';
import { releases, characters } from '../data';

export default function ReleaseDetail() {
    const { id } = useParams<{ id: string }>();
    const release = releases.find(r => r.id === id);

    if (!release) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Release Not Found</h1>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }

    const releaseCharacters = release.characterIds
        ? characters.filter(c => release.characterIds?.includes(c.id))
        : [];

    const typeColors = {
        album: 'badge-primary',
        ep: 'badge-secondary',
        single: 'badge-accent',
    };

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="btn btn-ghost mb-6">
                    ← Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Cover Art */}
                    <div>
                        <img
                            src={release.coverArt}
                            alt={release.title}
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Release Info */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-4xl font-bold">{release.title}</h1>
                            <div className={`badge badge-lg ${typeColors[release.type]}`}>
                                {release.type.toUpperCase()}
                            </div>
                        </div>

                        <p className="text-lg opacity-70 mb-6">
                            Released: {new Date(release.releaseDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>

                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3">About</h2>
                            <p className="text-base leading-relaxed">{release.description}</p>
                        </div>

                        {/* Streaming Links */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3">Streaming</h2>
                            <div className="flex flex-wrap gap-2">
                                {release.streamingLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline"
                                    >
                                        {link.platform}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Characters */}
                        {releaseCharacters.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">Featured Characters</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {releaseCharacters.map(character => (
                                        <div key={character.id} className="card bg-base-100 shadow-md">
                                            <figure>
                                                <img
                                                    src={character.image}
                                                    alt={character.name}
                                                    className="w-full h-32 object-cover"
                                                />
                                            </figure>
                                            <div className="card-body p-4">
                                                <h3 className="card-title text-lg">{character.name}</h3>
                                                <p className="text-sm opacity-70">{character.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

