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
                            style={{ maxHeight: '500px', objectFit: 'cover', objectPosition: 'top' }}
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
                {character.years.map(year => (
                    <div key={year.year} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={year.image}
                                alt={year.year}
                                className="w-full rounded-lg shadow-2xl"
                                style={{ maxHeight: '500px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>


                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <h1 className="text-4xl font-bold">{year.year}</h1>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-3">About</h2>
                                <p className="text-base leading-relaxed">{year.description}</p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-3">Clothes</h2>
                                <ul className="list bg-base-100 rounded-box shadow-md">
                                    {/* <p className="text-base leading-relaxed">{year.description}</p> */}
                                    {year.clothes.map((clothing, idx) => (
                                        <li key={idx} className="list-row flex items-center gap-4 p-2">
                                            <div>
                                                <div>{clothing.product}</div>
                                                <div className="text-xs uppercase font-semibold opacity-60">
                                                    {clothing.name}
                                                </div>
                                            </div>
                                            <a href={clothing.link} target='_blank'>
                                                <button className="btn btn-square btn-ghost">
                                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                                </button>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}