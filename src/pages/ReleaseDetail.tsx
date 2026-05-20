import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { releases, characters } from '../data';
import { useAlternateMarkdownLink } from '../hooks/useAlternateMarkdownLink';
import type { ReleaseType } from '../types';

function ExternalLinkIcon() {
    return (
        <svg
            className="size-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg
            className="size-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

function CoverArt({ src, alt }: { src: string; alt: string }) {
    return (
        <figure className="relative overflow-hidden rounded-2xl bg-base-300 ring-1 ring-base-content/10 shadow-2xl">
            <img
                src={src}
                alt={alt}
                className="w-full aspect-square object-cover"
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

const typeBadgeClass: Record<ReleaseType, string> = {
    album: 'border-primary/40 text-primary',
    ep: 'border-secondary/40 text-secondary',
    single: 'border-accent/40 text-accent',
};

export default function ReleaseDetail() {
    useAlternateMarkdownLink();
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

    const streamingLinks = release.streamingLinks.filter(link => link.url.trim());

    const formattedDate = new Date(release.releaseDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-base-200">
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 lg:mb-24">
                    <CoverArt src={release.coverArt} alt={release.title} />

                    <div className="lg:pt-4">
                        <SectionLabel>Release</SectionLabel>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
                                {release.title}
                            </h1>
                            <span
                                className={`badge badge-outline badge-lg font-semibold uppercase tracking-wider ${typeBadgeClass[release.type]}`}
                            >
                                {release.type}
                            </span>
                        </div>

                        <p className="text-sm uppercase tracking-wider text-base-content/50 mb-8 tabular-nums">
                            {formattedDate}
                        </p>

                        <div className="divider divider-primary/30 my-0 mb-8" />

                        <SectionLabel>About</SectionLabel>
                        <p className="text-base sm:text-lg leading-relaxed text-base-content/85">
                            {release.description}
                        </p>
                    </div>
                </header>

                {streamingLinks.length > 0 && (
                    <section className="mb-16 lg:mb-24">
                        <div className="flex items-end gap-4 mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Listen</h2>
                            <div className="flex-1 h-px bg-base-content/10 mb-2" />
                        </div>

                        <ul className="flex flex-wrap gap-3">
                            {streamingLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-4 rounded-xl bg-base-100/80 hover:bg-base-100 border border-base-content/10 hover:border-primary/30 px-5 py-4 transition-all duration-200"
                                    >
                                        <span className="font-medium text-base-content whitespace-nowrap">
                                            {link.platform}
                                        </span>
                                        <ExternalLinkIcon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {releaseCharacters.length > 0 && (
                    <section>
                        <div className="flex items-end gap-4 mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Featured characters</h2>
                            <div className="flex-1 h-px bg-base-content/10 mb-2" />
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {releaseCharacters.map(character => (
                                <li key={character.id}>
                                    <Link
                                        to={`/character/${character.id}`}
                                        className="group flex items-center gap-4 rounded-xl bg-base-100/80 hover:bg-base-100 border border-base-content/10 hover:border-primary/30 px-4 py-3 transition-all duration-200"
                                    >
                                        <img
                                            src={character.thumbnail}
                                            alt={character.name}
                                            className="size-14 shrink-0 rounded-lg object-cover object-top ring-1 ring-base-content/10"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-base-content truncate">
                                                {character.name}
                                            </p>
                                            <p className="text-xs text-base-content/50 mt-0.5 line-clamp-2">
                                                {character.description}
                                            </p>
                                        </div>
                                        <ChevronRightIcon />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}
