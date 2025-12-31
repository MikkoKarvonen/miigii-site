import { Link } from 'react-router-dom';
import type { Character } from '../types';

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <Link to={`/character/${character.id}`} className="card card-sm bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card card-sm bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-full aspect-square object-cover"
                        style={{ objectPosition: 'top' }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{character.name}</h2>
                    <p className="text-xs opacity-70 line-clamp-2">{character.description}</p>
                </div>
            </div>
        </Link>
    );
}

