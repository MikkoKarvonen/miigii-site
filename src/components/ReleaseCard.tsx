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
        <Link to={`/release/${release.id}`} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
                <img src={release.coverArt} alt={release.title} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{release.title}</h2>
                    <div className={`badge ${typeColors[release.type]}`}>
                        {release.type.toUpperCase()}
                    </div>
                </div>
                <p className="text-sm opacity-70">
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

