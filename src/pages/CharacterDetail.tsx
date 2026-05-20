import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { characters } from '../data';
import { useAlternateMarkdownLink } from '../hooks/useAlternateMarkdownLink';

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

function CharacterImage({
    src,
    alt,
    square = false,
}: {
    src: string;
    alt: string;
    square?: boolean;
}) {
    return (
        <figure className="relative overflow-hidden rounded-2xl bg-base-300 ring-1 ring-base-content/10 shadow-2xl">
            <img
                src={src}
                alt={alt}
                className={
                    square
                        ? 'w-full aspect-square object-cover object-top'
                        : 'w-full h-auto block'
                }
            />
            {square && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-300/40 via-transparent to-transparent" />
            )}
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

export default function CharacterDetail() {
    useAlternateMarkdownLink();
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

    const hasYears = character.years.length > 0;

    return (
        <div className="min-h-screen bg-base-200">
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Hero */}
                <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 lg:mb-24">
                    <CharacterImage src={character.image} alt={character.name} square />

                    <div className="lg:pt-4">
                        <SectionLabel>Character</SectionLabel>
                        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                            {character.name}
                        </h1>

                        <div className="divider divider-primary/30 my-0 mb-8" />

                        <SectionLabel>About</SectionLabel>
                        <p className="text-base sm:text-lg leading-relaxed text-base-content/85">
                            {character.description}
                        </p>
                    </div>
                </header>

                {/* Year timeline */}
                {hasYears && (
                    <section>
                        <div className="flex items-end gap-4 mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Through the years</h2>
                            <div className="flex-1 h-px bg-base-content/10 mb-2" />
                        </div>

                        <div className="space-y-20 sm:space-y-28">
                            {character.years.map((year, index) => {
                                const reverse = index % 2 === 1;
                                const hasAbout = Boolean(year.description?.trim());
                                const hasClothes = year.clothes.length > 0;

                                return (
                                    <article
                                        key={year.year}
                                        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start ${
                                            reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                                        }`}
                                    >
                                        <div className="lg:sticky lg:top-8">
                                            <CharacterImage src={year.image} alt={`${character.name} in ${year.year}`} />
                                        </div>

                                        <div className="lg:pt-2">
                                            <div className="inline-flex items-center gap-3 mb-8">
                                                <span className="badge badge-outline badge-lg border-primary/40 text-primary font-semibold tabular-nums">
                                                    {year.year}
                                                </span>
                                                <div className="h-px flex-1 min-w-8 bg-base-content/10" />
                                            </div>

                                            {hasAbout && (
                                                <div className="mb-8">
                                                    <SectionLabel>About</SectionLabel>
                                                    <p className="text-base leading-relaxed text-base-content/85">
                                                        {year.description}
                                                    </p>
                                                </div>
                                            )}

                                            {hasClothes ? (
                                                <div>
                                                    <SectionLabel>Clothes</SectionLabel>
                                                    <ul className="flex flex-col gap-3">
                                                        {year.clothes.map((clothing, idx) => (
                                                            <li key={idx}>
                                                                <a
                                                                    href={clothing.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex items-center justify-between gap-4 rounded-xl bg-base-100/80 hover:bg-base-100 border border-base-content/10 hover:border-primary/30 px-5 py-4 transition-all duration-200"
                                                                >
                                                                    <div className="min-w-0">
                                                                        <p className="font-medium text-base-content truncate">
                                                                            {clothing.product}
                                                                        </p>
                                                                        <p className="text-xs uppercase tracking-wider text-base-content/50 mt-1">
                                                                            {clothing.name}
                                                                        </p>
                                                                    </div>
                                                                    <ExternalLinkIcon />
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                !hasAbout && (
                                                    <p className="text-sm text-base-content/40 italic">
                                                        More details coming soon.
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
