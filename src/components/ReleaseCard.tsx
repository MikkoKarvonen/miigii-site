import { Link } from 'react-router-dom';
import type { Release } from '../types';

interface ReleaseCardProps {
    release: Release;
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
    const typeColors = {
        album: 'badge-primary',
        ep: 'badge-secondary',
        single: 'badge-accent',
    };

    return (
        <Link to={`/release/${release.id}`} className="card card-sm bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
                <img
                    src={release.coverArt}
                    alt={release.title}
                    className="w-full aspect-square object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="card-title text-base">{release.title}</h2>
                    <div className={`badge ${typeColors[release.type]}`}>
                        {release.type.toUpperCase()}
                    </div>
                </div>
                <p className="text-xs opacity-70">
                    {new Date(release.releaseDate).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'numeric',
                        year: 'numeric',
                    }).replace(/\//g, '.')}
                </p>
            </div>
        </Link>
    );
}

