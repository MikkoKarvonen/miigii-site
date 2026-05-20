import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Albums', hash: 'albums' },
    { label: "EP's", hash: 'eps' },
    { label: 'Singles', hash: 'singles' },
    { label: 'Characters', hash: 'characters' },
] as const;

function NavHashLink({ hash, children }: { hash: string; children: React.ReactNode }) {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <a href={`#${hash}`} className="btn btn-ghost btn-sm">
                {children}
            </a>
        );
    }

    return (
        <Link to={`/#${hash}`} className="btn btn-ghost btn-sm">
            {children}
        </Link>
    );
}

export default function Navbar() {
    return (
        <header className="navbar bg-base-100/95 backdrop-blur-sm sticky top-0 z-50 border-b border-base-300 px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-bold px-2">
                    Miigii
                </Link>
            </div>
            <nav className="flex-none">
                <ul className="menu menu-horizontal gap-1 px-0">
                    {navItems.map(item =>
                        'hash' in item ? (
                            <li key={item.hash}>
                                <NavHashLink hash={item.hash}>{item.label}</NavHashLink>
                            </li>
                        ) : (
                            <li key={item.to}>
                                <Link to={item.to} className="btn btn-ghost btn-sm">
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </header>
    );
}
