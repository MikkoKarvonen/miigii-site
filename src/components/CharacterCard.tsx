import type { Character } from '../types';

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p className="text-sm opacity-70">{character.description}</p>
            </div>
        </div>
    );
}

