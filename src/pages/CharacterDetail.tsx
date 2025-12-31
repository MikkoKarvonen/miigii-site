import { useParams, Link } from 'react-router-dom';
import { characters } from '../data';

export default function CharacterDetail() {
    const { id } = useParams<{ id: string }>();
    const character = characters.find(c => c.id === id);

    if (!character) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Character Not Found</h1>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="btn btn-ghost mb-6">
                    ← Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>


                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-4xl font-bold">{character.name}</h1>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3">About</h2>
                            <p className="text-base leading-relaxed">{character.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}