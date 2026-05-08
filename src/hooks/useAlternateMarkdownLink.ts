import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to add an alternate markdown link tag to the document head
 * based on the current route
 */
export function useAlternateMarkdownLink() {
    const location = useLocation();

    useEffect(() => {
        // Generate the markdown file path based on the current route
        let markdownPath: string;

        if (location.pathname === '/') {
            markdownPath = '/index.md';
        } else {
            // Remove leading slash and add .md extension
            markdownPath = `${location.pathname}.md`;
        }

        // Create or update the link element
        let linkElement = document.querySelector('link[rel="alternate"][type="text/markdown"]') as HTMLLinkElement;

        if (!linkElement) {
            // Create new link element if it doesn't exist
            linkElement = document.createElement('link');
            linkElement.rel = 'alternate';
            linkElement.type = 'text/markdown';
            document.head.appendChild(linkElement);
        }

        // Update the href
        linkElement.href = markdownPath;

        // Cleanup function to remove the link when component unmounts
        // (optional - you might want to keep it for navigation)
        return () => {
            // We'll keep the link element but just update it on route changes
            // If you want to remove it on unmount, uncomment the line below:
            // linkElement?.remove();
        };
    }, [location.pathname]);
}
